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
      <div className="px-6 lg:px-8 -mt-4">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          Secure your account by creating a PIN
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center max-w-xs mx-auto">
          Choose a 6-digit number as your pin to secure your account
        </p>
        <form className="mt-10 flex items-center flex-col" onSubmit={onSubmit}>
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
        <div className="text-center mt-5">
          <button className="text-sm">
            <span>Already have an account?</span>
            <span
              onClick={() => setStep('login')}
              className="text-primary-base font-bold ml-1 cursor-pointer hover:text-primary-hover"
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
