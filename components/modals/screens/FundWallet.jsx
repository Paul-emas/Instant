import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePaystackPayment } from 'react-paystack';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../slices/user';
import { persistSelector } from '../../../slices/persist';
import { createWalletTransaction, fundWalletTransaction } from '../../../api';
import useFetchWalletBalance from '../../../hooks/useFetchWalletBalance';

import WalletIcon from '../../../public/svgs/wallet.svg';

import Modal from '../index';
import FormInput from '../../forms/FormInput';
import PrimaryButton from '../../Buttons/PrimaryButton';
import RequestLoader from '../../loaders/RequestLoader';
import ErrorSuccess from '../ErrorSuccess';
import { toast } from 'react-toastify';

const FundWallet = ({ setStep, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token } = useSelector(persistSelector);
  const { me } = useSelector(userSelector);
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStep, setPaymentStep] = useState(0);
  const [reference, setReference] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const initializePayment = usePaystackPayment(config);
  const { init } = useFetchWalletBalance();

  useEffect(() => {
    if (config?.reference) initializePayment(onSuccess, close);
  }, [config]);

  useEffect(() => {
    if (reference) {
      validateTransaction();
    }
  }, [reference]);

  async function onSubmit(formData) {
    if (formData) {
      if (!navigator.onLine) {
        setStep('offline');
        return;
      }

      setIsLoading(true);
      const amount = Number(formData.amount);
      const resp = await createWalletTransaction({ amount }, token);

      if (resp?.error) {
        setIsLoading(false);
        toast.error(resp?.error?.data?.errors[0]?.message, {
          theme: 'colored',
        });
        return;
      }

      if (resp.data) {
        setIsLoading(false);
        setPaymentStep(-1);
        const { reference } = resp.data;
        setConfig({
          reference,
          email: me?.email?.value,
          amount: amount * 100,
          publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUB_KEY,
        });
      }
    }
  }

  function onSuccess(payload) {
    setReference(payload?.reference);
    validateTransaction();
  }

  async function validateTransaction() {
    if (reference) {
      setPaymentStep(1);
      const resp = await fundWalletTransaction({ reference }, token);

      if (resp?.error) {
        setPaymentStep(2);
        setIsLoading(false);
        setErrorMsg(resp?.error?.message);
        return;
      }

      if (resp.data) {
        setPaymentStep(2);
        init();
      }
    }
  }

  return (
    <>
      {paymentStep === 0 && (
        <Modal border={false} close={close}>
          <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-10">
            <WalletIcon className="mx-auto" />
            <div className="mx-auto mt-5 mb-10 max-w-xs text-center text-2xl font-bold text-black">
              Save money for easy future transactions
            </div>
            <FormInput
              className="mt-2 px-5"
              type="currency"
              id="amount"
              errors={errors}
              label="Enter amount"
              error={errors.amount ?? false}
              {...register('amount', {
                required: true,
              })}
            />
            <div className="mt-8">
              <PrimaryButton size="base" loading={isLoading}>
                Proceed to Payment
              </PrimaryButton>
            </div>
          </form>
        </Modal>
      )}

      {paymentStep === 1 && (
        <div className="fixed top-0 left-0 z-50 min-h-screen w-full overflow-hidden">
          <div className="absolute z-10 flex h-full w-full items-center justify-center">
            <RequestLoader type="payment" />
          </div>
          <div className="modal-overlay min-h-screen w-full bg-secondary-modal bg-opacity-70"></div>
        </div>
      )}

      {paymentStep === 2 && (
        <Modal border={false} close={close}>
          <ErrorSuccess
            error={errorMsg}
            msg={
              errorMsg
                ? errorMsg
                : 'Your transaction was successfull you can now purchase electricity units via wallet'
            }
            next={() => validateTransaction()}
          />
        </Modal>
      )}
    </>
  );
};

export default FundWallet;
