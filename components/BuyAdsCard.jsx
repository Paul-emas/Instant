import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import { setInitAuthentication } from '../slices/user';

const BuyAdsCard = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-224 w-full items-center rounded-xl bg-secondary-teal py-7 px-5 lg:flex lg:w-1/2 lg:p-4">
      <div className="hidden lg:block">
        <Image
          src="/images/ads.jpg"
          width={178}
          height={192}
          objectFit="cover"
          objectPosition="right"
          className="rounded-xl"
        />
      </div>
      <div className="xl:ml-6">
        <div className="text-xl font-bold text-white lg:text-2xl">
          Start saving more on <br /> electricity
        </div>
        <p className="max-w-md text-sm text-gray-200 lg:text-base">
          Earn and save more when you create an{' '}
          <br className="hidden lg:block" /> account with us.
        </p>
        <div className="mt-10 w-full lg:mt-6">
          <Button
            className="w-full lg:w-auto"
            onClick={() => dispatch(setInitAuthentication('register'))}
            white
          >
            <div className="flex items-center justify-center">
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
