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
import CreatePinMessage from './screens/CreatePinMessage';
import NoInternet from './screens/NoInternet';

const AuthModalController = () => {
  const dispatch = useDispatch();
  const { initAuthentication } = useSelector(userSelector);
  const [step, setStep] = useState(null);

  useEffect(() => {
    if (initAuthentication) {
      setStep(initAuthentication);
    } else {
      close();
    }
  }, [initAuthentication]);

  function close() {
    dispatch(setInitAuthentication(null));
    setStep(null);
  }

  return (
    <>
      {initAuthentication && (
        <div>
          {step === 'login' && <Login close={close} setStep={setStep} />}
          {step === 'register' && <Register close={close} setStep={setStep} />}
          {step === 'signIn' && <SignInPin close={close} setStep={setStep} />}
          {step === 'reset' && <ResetPin close={close} setStep={setStep} />}
          {step === 'createPinMessage' && (
            <CreatePinMessage close={close} setStep={setStep} />
          )}
          {step === 'createPin' && (
            <CreatePin close={close} setStep={setStep} />
          )}
          {step === 'confirmPin' && (
            <ConfirmPin close={close} setStep={setStep} />
          )}
          {step === 'offline' && <NoInternet close={close} />}
        </div>
      )}
    </>
  );
};

export default AuthModalController;
