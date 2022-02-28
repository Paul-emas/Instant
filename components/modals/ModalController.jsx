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
import FundWallet from './screens/FundWallet';

const ModalController = () => {
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

  const modalProps = { close, setStep };

  return (
    <>
      {initAuthentication && (
        <div>
          {step === 'login' && <Login {...modalProps} />}
          {step === 'register' && <Register {...modalProps} />}
          {step === 'signIn' && <SignInPin {...modalProps} />}
          {step === 'reset' && <ResetPin {...modalProps} />}
          {step === 'createPinMessage' && <CreatePinMessage {...modalProps} />}
          {step === 'createPin' && <CreatePin {...modalProps} />}
          {step === 'confirmPin' && <ConfirmPin {...modalProps} />}
          {step === 'fundWallet' && <FundWallet {...modalProps} />}
          {step === 'offline' && <NoInternet close={close} />}
        </div>
      )}
    </>
  );
};

export default ModalController;
