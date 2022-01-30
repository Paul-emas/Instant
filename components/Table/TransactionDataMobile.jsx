import PropTypes from 'prop-types';
import moment from 'moment';
import { isMobile } from 'react-device-detect';

const TransactionDataMobile = ({ transactions }) => {
  return (
    <>
      {isMobile &&
        transactions.slice(0, 2).map((transaction, index) => {
          return (
            <div className="px-3 py-4" key={`${transaction}${index}`}>
              <div className="w-full rounded-xl border-2 border-gray-200 bg-white pb-6">
                <div className="transactions-center flex justify-between border-b py-3 px-4">
                  <div className="text-sm font-semibold text-gray-500">
                    Ref: {transaction?.reference}
                  </div>
                  <div className="text-sm font-semibold text-gray-500">
                    {moment(transaction?.createdAt).utc().format('L')}{' '}
                    <span className="ml-1">
                      {moment(transaction?.createdAt).utc().format('LTS')}
                    </span>
                  </div>
                </div>
                <div className="transactions-center flex justify-between py-3 px-4">
                  <div className="text-sm font-bold">Unit purchased</div>
                  <div className="text-sm font-semibold">
                    <span className="font-semibold">
                      {transaction?.country?.currency}
                    </span>
                    <span className="ml-1 font-bold text-font-dark">
                      {transaction?.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="transactions-center -mt-2 flex justify-between px-4">
                  <div className="text-xs font-semibold text-gray-500">
                    {transaction?.meter?.number}
                  </div>
                  <div className="text-xs font-semibold text-primary-dark text-opacity-80">
                    {transaction?.meter?.provider?.disco?.shortName}
                  </div>
                </div>
                <div className="mt-2 px-4">
                  <div className="flex">
                    <p className="max-w-xs rounded-md bg-primary-light py-1 px-3 text-xs font-semibold text-primary-base">
                      <span className="truncate">
                        {transaction?.meter?.address}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

TransactionDataMobile.defaultProps = {
  transactions: [],
};

TransactionDataMobile.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionDataMobile;
