import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setInitAuthentication } from '../../../slices/user';

import Empty from '../../../public/svgs/empty-transcation.svg';

const TransactionEmptyState = ({ setOpenBuyElectricityModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="mt-5 flex items-center justify-center bg-white pt-24 pb-32 sm:rounded-xl">
      <div className="flex flex-col items-center">
        <Empty />
        <div className="text-base font-bold">Your transactions will appear here</div>
        <p className="mt-1 max-w-xs text-center text-sm text-gray-400">
          An email has been sent to you kindly submit to continue with this application
        </p>
        {!router.asPath.includes('/wallet') ? (
          <button
            onClick={() => setOpenBuyElectricityModal(true)}
            className="mt-8 rounded-lg border-none bg-primary-light px-6 py-3 text-xs font-bold uppercase text-primary-base outline-none"
          >
            Recharge a meter
          </button>
        ) : (
          <button
            onClick={() => dispatch(setInitAuthentication('fundWallet'))}
            className="mt-8 rounded-lg border-none bg-primary-light px-6 py-3 text-xs font-bold uppercase text-primary-base outline-none"
          >
            Fund Wallet
          </button>
        )}
      </div>
    </div>
  );
};

TransactionEmptyState.defaultProps = {
  setOpenBuyElectricityModal: () => null,
};

TransactionEmptyState.propTypes = {
  setOpenBuyElectricityModal: PropTypes.func,
};

export default TransactionEmptyState;
