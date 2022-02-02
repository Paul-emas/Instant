import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setInitAuthentication } from '../slices/user';

import Button from './Button';

const BuyCard = ({ setOpenBuyElectricityModal }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState('');
  const curHr = new Date().getHours();

  useEffect(() => {
    if (curHr < 12) {
      setTime('Morning');
    } else if (curHr < 18) {
      setTime('Afternoon');
    } else {
      setTime('Evening');
    }
  }, [curHr]);

  return (
    <div className="h-224 w-full rounded-xl bg-white py-7 px-5 lg:w-1/2 lg:p-7">
      <div className="text-xl font-bold leading-snug lg:text-3.5xl">
        Good {time} 👀,
      </div>
      <p className="max-w-md text-sm text-gray-500 lg:text-base">
        Buy electricity and earn and save more when you create{' '}
        <br className="hidden lg:block" /> an account with us.
      </p>
      <div className="mt-5 lg:mt-8 lg:pt-2">
        <div className="flex w-full flex-col justify-end space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
          <Button
            light
            onClick={() => dispatch(setInitAuthentication('register'))}
          >
            Create an Account
          </Button>
          <Button onClick={() => setOpenBuyElectricityModal(true)}>
            Buy Electricity
          </Button>
        </div>
      </div>
    </div>
  );
};

BuyCard.propTypes = {
  setOpenBuyElectricityModal: PropTypes.func,
};

export default BuyCard;
