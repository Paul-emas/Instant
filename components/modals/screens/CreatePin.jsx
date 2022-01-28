import { useState } from 'react';
import PinInput from 'react-pin-input';

import { useDispatch } from 'react-redux';
import { setAuthPin } from '../../../slices/user';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';
import BottomDownload from '../BottomDownload';

const CreatePin = ({ close, setStep }) => {
  const dispatch = useDispatch();

  const [pin, setPin] = useState('');

  function onSubmit(e) {
    e !== undefined && e.preventDefault();
    if (pin?.length === 6) {
      if (!navigator.onLine) {
        dispatch(setInitAuthentication('offline'));
        return;
      }
      dispatch(setAuthPin(pin));
      setStep('confirmPin');
    }
  }

  return (
    <Modal border={false} close={close}>
      <div className="-mt-4 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">
          Secure your account by creating a PIN
        </h1>
        <p className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-700">
          Choose a 6-digit number as your pin to secure your account
        </p>
        <form className="mt-10 flex flex-col items-center" onSubmit={onSubmit}>
          <PinInput
            length={6}
            secret
            onChange={value => setPin(value)}
            type="numeric"
            className="hidden"
            inputMode="number"
            autoSelect={true}
          />
          <PrimaryButton size="base" className="mt-8">
            Next
          </PrimaryButton>
        </form>
        <div className="mt-5 text-center">
          <button className="text-sm">
            <span>Already have an account?</span>
            <span
              onClick={() => setStep('login')}
              className="ml-1 cursor-pointer font-bold text-primary-base hover:text-primary-hover"
            >
              Login
            </span>
          </button>
        </div>
      </div>
      <BottomDownload />
    </Modal>
  );
};

export default CreatePin;
