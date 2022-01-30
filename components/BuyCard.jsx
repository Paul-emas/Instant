import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setInitAuthentication } from '../slices/user';

import Button from './Button';

const BuyCard = ({ setOpenBuyElectricityModal }) => {
  const dispatch = useDispatch();

  return (
    <div className="h-224 w-1/2 rounded-xl bg-white p-7">
      <div className="text-3.5xl font-bold">Good afternoon👀,</div>
      <p className="max-w-md text-gray-500">
        Buy electricity and earn and save more when you create <br /> an account
        with us.
      </p>
      <div className="mt-6 flex justify-end">
        <div className="space-x-4">
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
