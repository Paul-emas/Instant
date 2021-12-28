import ReferIcon from '../public/svgs/refer-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import FacebookIcon from '../public/svgs/social/facebook.svg';
import WhatsappIcon from '../public/svgs/social/whatsapp.svg';
import InstagramIcon from '../public/svgs/social/instagram.svg';
import TwitterIcon from '../public/svgs/social/twitter.svg';

const ReferBox = () => {
  return (
    <div className="bg-white w-full h-96 text-center py-5 rounded-xl mt-10">
      <ReferIcon className="mt-5 mx-auto" />
      <div className="text-base font-bold mt-3 text-primary-darker">
        Refer & Earn
      </div>
      <p className="text-gray-400  max-w-sm mx-auto px-10 text-xs 2xl:text-sm mt-1">
        Tell others about instant energy and get real cash in your wallet when
        they buy electricity
      </p>
      <div className="w-60 mx-auto mt-3 rounded-lg border">
        <div className="flex justify-center items-center py-3">
          <div className="border-r text-xl font-bold pr-2">1234 2345 6789</div>
          <FontAwesomeIcon
            icon={faCopy}
            className="w-5 h-5 text-primary-base ml-3 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <FacebookIcon />
        <WhatsappIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

ReferBox.propTypes = {};

export default ReferBox;
