import { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import gsap from 'gsap';
import { isMobile } from 'react-device-detect';

import BulbIcon from '../../public/svgs/bulb-db.svg';

const TransactionDataDefault = ({ transactions, setReceipt, setOpenReceiptModal }) => {
  useEffect(() => {
    const tl = gsap.timeline({});
    const lists = gsap.utils.toArray('.lists');
    if (lists) {
      tl.from(lists, { scale: 0.9, autoAlpha: 0, y: 30, stagger: 0.2 });
      tl.duration(1.5);
    }

    return () => tl.kill;
  }, []);

  return (
    <>
      {!isMobile &&
        transactions.map((transaction, index) => {
          const active = transaction?.status === 'success' ? true : false;
          return (
            <tr
              className="last:-white lists py-4 pl-6 hover:bg-primary-light"
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
                        {transaction?.meter?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm text-font-grey">
                  {moment(transaction?.createdAt).utc().format('L')}{' '}
                  <span className="ml-2">{moment(transaction?.createdAt).format('LT')}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm text-font-grey">
                  {transaction?.meter?.provider?.disco?.shortName}
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm text-font-grey">{transaction?.meter?.number}</div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm font-bold">{transaction?.reference}</div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm font-bold">
                  <div className="text-sm  text-font-grey">
                    <span className="font-semibold">{transaction?.country?.currency}</span>
                    <span className="ml-1 font-bold text-font-dark">
                      {transaction?.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6  py-4">
                <div className="text-sm font-bold">
                  {active && (
                    <span
                      onClick={() => {
                        setReceipt(transaction);
                        setOpenReceiptModal(true);
                      }}
                      className="inline-flex cursor-pointer rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-font-green"
                    >
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
  setReceipt: () => null,
  setOpenReceiptModal: () => null,
};

TransactionDataDefault.propTypes = {
  transactions: PropTypes.array,
  setReceipt: PropTypes.func,
  setOpenReceiptModal: PropTypes.func,
};

export default TransactionDataDefault;
