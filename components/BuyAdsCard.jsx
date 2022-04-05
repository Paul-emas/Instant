import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import { setInitAuthentication } from '../slices/user';

const BuyAdsCard = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-224 w-full items-center rounded-xl bg-secondary-teal py-7 px-5 lg:flex lg:w-1/2 lg:p-4"></div>
  );
};

export default BuyAdsCard;
