import router from 'next/router';
import WifiIcon from '../../../public/svgs/wifi-error.svg';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';

const NoInternet = ({ close }) => {
  return (
    <Modal border={false} close={close}>
      <div className="px-6 lg:px-8 -mt-4">
        <WifiIcon className="mx-auto my-3" />
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          No internet connection
        </h1>
        <p className="text-gray-400 mt-4 text-sm text-center">
          We improved our systems to be safe and secure for all our customers by
          creating a 6-digit login Pin.
        </p>
        <div className="flex justify-center mt-5 mb-4">
          <PrimaryButton
            size="base"
            onClick={() => router.reload(window.location.pathname)}
          >
            Reload
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default NoInternet;
