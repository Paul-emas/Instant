import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { getProviders } from '../../api';
import PostPaidForm from '../forms/PostPaidForm';
import PrepaidForm from '../forms/PrepaidForm';
import QuickPayPhoneInput from '../forms/QuickPayPhoneInput';
import BuyElectricityTab from '../tabs/BuyElectricityTab';
import Modal from '../modals';
import QuickBuyConfirmDetails from './QuickBuyConfirmDetails';
import ChangePhone from './ChangePhone';
import ErrorSuccess from './ErrorSuccess';
import Receipt from './Receipt';

const QuickPay = () => {
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];
  const [activeTab, setActiveTab] = useState(null);
  const [openQuickBuyModal, setOpenQuickBuyModal] = useState(false);
  const [providers, setProviders] = useState([]);
  const [step, setStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [confirmDetails, setConfirmDetails] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [paystack, setPayStack] = useState(null);
  const [paymentToken, setPaymentToken] = useState(null);
  const [receipt, setReciept] = useState(null);

  const tabProps = {
    tabs,
    activeTab,
    setActiveTab,
  };

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
      setOpenQuickBuyModal(false);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    if (openQuickBuyModal) {
      tl.to('.hide', { autoAlpha: 0, display: 'none' });
      tl.fromTo(
        '.show',
        { autoAlpha: 0 },
        { autoAlpha: 1, display: 'block', delay: 0.4 },
      );
      tl.duration(0.8).play();
    } else {
      tl.to('.show', { autoAlpha: 0, display: 'none', delay: 0.4 });
      tl.to('.hide', { autoAlpha: 1, display: 'block' });
      tl.duration(0.01).play();
    }
  }, [openQuickBuyModal]);

  return (
    <>
      {openModal && step === 1 && (
        <Modal close={close} title="Confirm Information" setOpen={setOpenModal}>
          <QuickBuyConfirmDetails
            details={confirmDetails}
            setStep={setStep}
            paymentToken={paymentToken}
            setPayStack={setPayStack}
            setReciept={setReciept}
          />
        </Modal>
      )}
      {openModal && step === 2 && (
        <Modal
          close={() => setStep(1)}
          goBack={() => setStep(1)}
          setOpen={setOpenModal}
        >
          <ChangePhone setStep={setStep} />
        </Modal>
      )}
      {openModal && step === 3 && (
        <Modal border={false} setOpen={setOpenModal}>
          <ErrorSuccess paystack={paystack} next={() => setStep(4)} />
        </Modal>
      )}
      {openModal && step === 4 && (
        <Modal
          close={() => {
            setStep(0);
            setOpenQuickBuyModal(false);
          }}
          title="Purchase receipt"
          setOpen={setOpenModal}
        >
          <Receipt receipt={receipt} />
        </Modal>
      )}
      <div
        id="box"
        className={`${
          openQuickBuyModal
            ? 'lg:h-modal-md 2xl:h-modal -mt-20 lg:top-44 2xl:top-56'
            : '2xl:h-modal-sm lg:top-56 2xl:top-72'
        } bg-white w-full overflow-hidden ease lg:w-w-modal 2xl:w-9/12 ml-auto shadow-soft rounded-2xl relative lg:rounded-3xl z-20`}
      >
        <div className="hide">
          <div className="lg:pt-8">
            <div className="max-w-md">
              <h2 className="text-xl lg:text-32xl py-5 lg:py-0 px-8 lg:mb-2 2xl:mb-5 leading-tight 2xl:leading-tight text-black font-bold font-gill">
                Easy, Smart Energy <br /> Pre-pay
              </h2>
            </div>
            <QuickPayPhoneInput
              setUserEmail={setUserEmail}
              setActiveTab={setActiveTab}
              setOpenQuickBuyModal={setOpenQuickBuyModal}
            />
          </div>
          <div className="w-full h-14 text-primary-dark font-medium flex justify-center items-center bg-primary-light">
            <span>Dont have an account?</span>
            <Link href="/auth/sign-up">
              <a className="text-primary-base ml-2">Sign up</a>
            </Link>
          </div>
        </div>
        <div className="lg:pt-8 show hidden">
          <div>
            <h2 className="text-xl lg:text-2xl py-5 lg:py-0 text-center px-8 lg:mb-2 2xl:mb-4 text-black font-bold font-gill">
              Buy Electricity
            </h2>
          </div>
          <BuyElectricityTab {...tabProps} />
          <div className="slideUp">
            {activeTab === 0 && (
              <PrepaidForm
                providers={providers}
                setConfirmDetails={setConfirmDetails}
                setStep={setStep}
                setOpenModal={setOpenModal}
                email={userEmail}
                setPaymentToken={setPaymentToken}
              />
            )}
            {activeTab === 1 && (
              <PostPaidForm
                providers={providers}
                setConfirmDetails={setConfirmDetails}
                setStep={setStep}
                setOpenModal={setOpenModal}
                email={userEmail}
                setPaymentToken={setPaymentToken}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
