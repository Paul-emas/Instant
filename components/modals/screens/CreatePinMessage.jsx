import LockIcon from '../../../public/svgs/lock.svg';

import Modal from '../index';
import Button from '../../Button';

const CreatePinMessage = ({ setStep, close }) => {
  return (
    <Modal border={false} close={close}>
      <div className="px-6 lg:px-8 -mt-4">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center text-primary-dark">
          Keep your account safe by securing it with a PIN
        </h1>
        <LockIcon className="mx-auto my-3" />
        <p className="text-gray-400 mt-4 text-sm text-center">
          We improved our systems to be safe and secure for all our customers by
          creating a 6-digit login Pin.
        </p>
        <div className="flex justify-center mt-5 mb-4">
          <Button onClick={() => setStep('createPin')}>Create a Pin</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePinMessage;
