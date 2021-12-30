import { useEffect, useState } from 'react';
import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import Modal from '../index';
import { generateTranscationToken, getProviders } from '../../../api';
import PrePaidForm from '../../forms/PrepaidForm';
import PostPaid from '../../forms/PostPaidForm';
import QuickBuyConfirmDetails from '../QuickBuyConfirmDetails';
import ChangePhone from '../ChangePhone';
import ErrorSuccess from '../ErrorSuccess';
import Receipt from '../Receipt';
import RequestLoader from '../../loaders/RequestLoader';

const BuyElectricityModal = ({ open, setOpen }) => {
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];

  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [providers, setProviders] = useState([]);
  const [confirmDetails, setConfirmDetails] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [paystack, setPayStack] = useState(null);
  const [paymentToken, setPaymentToken] = useState(null);
  const [receipt, setReciept] = useState(null);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const authPhone = localStorage.getItem('authPhone');
    if (authPhone) {
      setPhone(authPhone);
    }
  }, []);

  useEffect(() => {
    fetchProviders();
    setUserEmail(localStorage.getItem('email'));
  }, []);

  async function fetchProviders() {
    const res = await getProviders();
    if (res.data) {
      setProviders(res.data.docs);
    }
  }

  const close = () => {
    const resp = confirm('Are you sure you want to cancel transcation?');
    if (resp) {
      setStep(0);
      setOpen(false);
    }
  };

  const onPayStackSuccess = async reference => {
    if (reference?.status === 'success') {
      setOpen(true);
      setStep(3);
      setPayStack(reference);
      const resp = await generateTranscationToken(
        { reference: reference.reference },
        paymentToken,
      );
      if (resp?.data) {
        setReciept(resp.data);
        setStep(4);
      }
    } else {
      setStep(4);
      setPaymentError({ message: reference?.message });
    }
  };

  return (
    <div>
      {step === 0 && open && (
        <Modal
          title={step === 0 ? 'Buy Electricity' : 'Add a new meter'}
          border={false}
          setOpen={setOpen}
          close={() => {
            setStep(0);
            setOpen(false);
          }}
        >
          <BuyElectricityTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="overflow-y-hidden pb-1.5">
            <div className="slideUp">
              {activeTab === 0 && (
                <PrePaidForm
                  providers={providers}
                  setConfirmDetails={setConfirmDetails}
                  setStep={setStep}
                  setOpenModal={setOpen}
                  email={userEmail}
                  fetchProviders={fetchProviders}
                  setPaymentToken={setPaymentToken}
                />
              )}
              {activeTab === 1 && (
                <PostPaid
                  providers={providers}
                  setConfirmDetails={setConfirmDetails}
                  setStep={setStep}
                  setOpenModal={setOpen}
                  email={userEmail}
                  fetchProviders={fetchProviders}
                  setPaymentToken={setPaymentToken}
                />
              )}
            </div>
          </div>
        </Modal>
      )}

      {open && step === 1 && (
        <Modal close={close} title="Confirm Information" setOpen={setOpen}>
          <QuickBuyConfirmDetails
            setOpen={setOpen}
            setStep={setStep}
            details={confirmDetails}
            onPayStackSuccess={onPayStackSuccess}
            phone={phone}
            setPhone={setPhone}
          />
        </Modal>
      )}
      {open && step === 2 && (
        <Modal border={false} setOpen={setOpen}>
          <ErrorSuccess paystack={paystack} next={() => setStep(3)} />
        </Modal>
      )}

      {open && step === 3 && (
        <div className="w-full min-h-screen top-0 left-0 fixed z-50 overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center z-10">
            <RequestLoader type="payment" />
          </div>
          <div className="modal-overlay w-full min-h-screen bg-secondary-modal bg-opacity-70"></div>
        </div>
      )}

      {open && step === 4 && (
        <Modal
          close={() => {
            setOpen(false);
            setStep(0);
          }}
          border={false}
          setOpen={setOpen}
        >
          <Receipt receipt={receipt} />
        </Modal>
      )}
    </div>
  );
};

export default BuyElectricityModal;
