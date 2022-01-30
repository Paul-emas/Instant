import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import { setInitAuthentication } from '../slices/user';

const BuyAdsCard = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex h-224 w-1/2 items-center rounded-xl bg-secondary-teal p-4">
      <div>
        <Image
          src="/images/ads.jpg"
          width={178}
          height={192}
          objectFit="cover"
          objectPosition="right"
          className="rounded-xl"
        />
      </div>
      <div className="ml-6">
        <div className="text-2xl font-bold text-white">
          Start saving more on <br /> electricity
        </div>
        <p className="max-w-md text-gray-200">
          Earn and save more when you create an <br /> account with us.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => dispatch(setInitAuthentication('register'))}
            white
          >
            <div className="flex items-center">
              <span>Start Saving now</span>
              <FontAwesomeIcon icon={faChevronRight} className="ml-2 h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyAdsCard;
