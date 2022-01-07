import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setInitAuthentication, userSelector } from '../../slices/user';
import ConfirmPin from './screens/ConfirmPin';
import CreatePin from './screens/CreatePin';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPin from './screens/ResetPin';
import SignInPin from './screens/SignInPin';

export const AuthModalController = () => {
  const dispatch = useDispatch();
  const { initAuthentication } = useSelector(userSelector);
  const [step, setStep] = useState(null);

  useEffect(() => {
    if (initAuthentication) {
      setStep('login');
    } else {
      close();
    }
  }, [initAuthentication]);

  function close() {
    setStep(null);
    dispatch(setInitAuthentication(false));
  }

  return (
    <>
      {initAuthentication && (
        <div>
          {step === 'login' && <Login close={close} setStep={setStep} />}
          {step === 'register' && <Register close={close} setStep={setStep} />}
          {step === 'signIn' && <SignInPin close={close} setStep={setStep} />}
          {step === 'reset' && <ResetPin close={close} setStep={setStep} />}
          {step === 'createPin' && (
            <CreatePin close={close} setStep={setStep} />
          )}
          {step === 'confirmPin' && (
            <ConfirmPin close={close} setStep={setStep} />
          )}
        </div>
      )}
    </>
  );
};
