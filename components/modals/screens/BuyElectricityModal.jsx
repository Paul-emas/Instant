import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../../../slices/persist';
import { generateTranscationToken } from '../../../api';

import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import Modal from '../index';
import PrePaidForm from '../../forms/PrepaidForm';
import PostPaid from '../../forms/PostPaidForm';
import QuickBuyConfirmDetails from '../QuickBuyConfirmDetails';
import ErrorSuccess from '../ErrorSuccess';
import Receipt from '../Receipt';
import RequestLoader from '../../loaders/RequestLoader';
import AddMeter from './AddMeter';
import { setInitAuthentication } from '../../../slices/user';

const BuyElectricityModal = ({ open, setOpen }) => {
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const dispatch = useDispatch();
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];

  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [confirmDetails, setConfirmDetails] = useState(null);
  const [paystack, setPayStack] = useState(null);
  const [paymentToken, setPaymentToken] = useState(null);
  const [receipt, setReciept] = useState(null);
  const [phone, setPhone] = useState('');
  const [selectedMeter, setSelectedMeter] = useState(null);

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  const close = () => {
    const resp = confirm('Are you sure you want to cancel transcation?');
    if (resp) {
      setStep(0);
      setOpen(false);
    }
  };

  const onPayStackSuccess = async (reference) => {
    setStep(3);
    setOpen(true);
    setPayStack(reference);
    const resp = await generateTranscationToken({ reference: reference.reference }, paymentToken);
    if (resp?.data) {
      setReciept(resp.data);
      setStep(4);
    }
  };

  const PrepaidPostPaidProps = {
    setConfirmDetails,
    setStep,
    setPaymentToken,
    selectedMeter,
    setSelectedMeter,
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
          <BuyElectricityTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="overflow-y-hidden pb-1.5">
            <div className="slideUp">
              {activeTab === 0 && <PrePaidForm {...PrepaidPostPaidProps} />}
              {activeTab === 1 && <PostPaid {...PrepaidPostPaidProps} />}
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
            close={close}
          />
        </Modal>
      )}

      {open && step === 2 && (
        <Modal border={false} setOpen={setOpen}>
          <ErrorSuccess paystack={paystack} next={() => setStep(3)} />
        </Modal>
      )}

      {open && step === 3 && (
        <div className="fixed top-0 left-0 z-50 min-h-screen w-full overflow-hidden">
          <div className="absolute z-10 flex h-full w-full items-center justify-center">
            <RequestLoader type="payment" />
          </div>
          <div className="modal-overlay min-h-screen w-full bg-secondary-modal bg-opacity-70"></div>
        </div>
      )}

      {open && step === 4 && (
        <Modal
          close={() => {
            setOpen(false);
            setStep(0);
            // !isLoggedIn && dispatch(setInitAuthentication('createPin'));
          }}
          border={false}
          setOpen={setOpen}
        >
          <Receipt receipt={receipt} />
        </Modal>
      )}

      {open && step === 5 && (
        <AddMeter open={open} setOpen={setOpen} goBack={() => setStep(0)} setSelectedMeter={setSelectedMeter} />
      )}
    </div>
  );
};

export default BuyElectricityModal;
