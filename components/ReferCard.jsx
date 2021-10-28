import ReferIcon from '../public/svgs/refer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCopy } from '@fortawesome/free-solid-svg-icons';

const ReferCard = () => {
  return (
    <div className="py-7 border-t border-b px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-font-darker">Refer and Earn</h2>
        <div>
          <p className="text-sm flex text-font-muted">
            <span>Leo4245567</span>
            <FontAwesomeIcon
              icon={faCopy}
              className="text-xs ml-1 w-3 h-3 relative text-font-muted cursor-pointer"
            />
          </p>
        </div>
      </div>
      <div className="mt-5 bg-primary-light p-5 rounded-lg">
        <ReferIcon width="100%" height={175} />
      </div>
      <p className="text-xs mt-5">
        Tell others about instant energy and get real cash in your wallet when
        they buy electricity.
      </p>
      <div className="text-xs mt-2 flex items-center font-semibold text-blue-500">
        <span>Learn more</span>
        <div className="w-4 h-4 bg-blue-500 ml-2 rounded-full text-white flex items-center justify-center text-xxs font-bold">
          <p className="pt-0.5">?</p>
        </div>
      </div>
    </div>
  );
};

export default ReferCard;
