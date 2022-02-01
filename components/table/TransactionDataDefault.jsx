import PropTypes from 'prop-types';
import moment from 'moment';
import { isMobile } from 'react-device-detect';

import BulbIcon from '../../public/svgs/bulb-db.svg';

const TransactionDataDefault = ({ transactions }) => {
  return (
    <>
      {!isMobile &&
        transactions.map((transaction, index) => {
          const active = transaction?.status === 'success' ? true : false;
          return (
            <tr
              className="last:-white py-4 pl-6 hover:bg-primary-light"
              key={`${transaction}${index}`}
            >
              <td className="whitespace-nowrap py-4 pl-6">
                <div className="flex items-center">
                  <div
                    className={`${
                      active ? 'bg-primary-base' : 'bg-red-600'
                    } flex h-8 w-8 items-center rounded-xl`}
                  >
                    <BulbIcon className="mx-auto my-3" />
                  </div>
                  <div className="ml-8">
                    <div>
                      <div className="text-sm font-bold text-font-dark">
                        Unit Purchased
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm text-font-grey">
                  {moment(transaction?.createdAt).utc().format('LL')}{' '}
                  <span className="ml-2">
                    {moment(transaction?.createdAt).utc().format('LTS')}
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm text-font-grey">
                  {transaction?.meter?.provider?.disco?.shortName}
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm text-font-grey">
                  {transaction?.meter?.number}
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm font-bold">
                  {transaction?.reference}
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm font-bold">
                  <div className="text-sm  text-font-grey">
                    <span className="font-semibold">
                      {transaction?.country?.currency}
                    </span>
                    <span className="ml-1 font-bold text-font-dark">
                      {transaction?.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm font-bold">
                  {active && (
                    <span className="inline-flex rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-font-green">
                      Receipt
                    </span>
                  )}
                  {!active && (
                    <span className="relative inline-flex rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-red-600">
                      Retry
                    </span>
                  )}
                </div>
              </td>
            </tr>
          );
        })}
    </>
  );
};
TransactionDataDefault.defaultProps = {
  transactions: [],
};

TransactionDataDefault.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionDataDefault;
