import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import TransactionEmptyState from './empty-states/TransactionEmptyState';
import Button from '../Button';

import Table from './index';
import Tabs from '../tabs';

const TransactionsTable = ({
  transactions,
  setOpenBuyElectricityModal,
  loading,
  paginate,
  children,
  title = 'Your transcations',
}) => {
  const router = useRouter();
  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const headings = !router.asPath.includes('/wallet')
    ? ['Meter name', 'Date', 'Distributor', 'Meter No.', 'Reference Code', 'Amount', 'Status']
    : ['Transaction Type', 'Date', 'Reference Code', 'Amount', 'Status'];

  const tableProps = {
    title,
    headings,
    loading,
    viewAll: function view() {
      return (
        <>
          {router.asPath !== '/quickbuy' && (
            <>
              {router.asPath === '/dashboard' ? (
                <Link href="/transactions">
                  <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
                    <span className="relative flex items-center justify-center">
                      <span className="mr-2">See all</span>
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
                    </span>
                  </button>
                </Link>
              ) : (
                <>
                  {!router.asPath.includes('/wallet') && (
                    <Link href="/transactions/wallet">
                      <Button>Wallet History</Button>
                    </Link>
                  )}
                </>
              )}
            </>
          )}
        </>
      );
    },
    tabs: function view() {
      return (
        <>
          {router.asPath !== '/transactions/wallet' && (
            <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </>
      );
    },
    child: function view() {
      return (
        <>
          {transactions.length <= 0 && !loading ? (
            <TransactionEmptyState setOpenBuyElectricityModal={setOpenBuyElectricityModal} />
          ) : null}

          {paginate && paginate()}
        </>
      );
    },
  };

  return (
    <Table {...tableProps}>
      {children}
      {isMobile && router.asPath === '/dashboard' && transactions.length > 0 && (
        <div className="flex justify-center pb-5">
          <Link href="/transactions">
            <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
              <span className="relative flex items-center justify-center">
                <span className="mr-2">See all</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
              </span>
            </button>
          </Link>
        </div>
      )}
    </Table>
  );
};

TransactionsTable.displayName = 'TransactionsTable';

TransactionsTable.defaultProps = {
  loading: false,
  transactions: [],
  paginate: () => null,
  setOpenBuyElectricityModal: () => null,
};

TransactionsTable.propTypes = {
  loading: PropTypes.bool,
  transactions: PropTypes.array,
  paginate: PropTypes.func,
  setOpenBuyElectricityModal: PropTypes.func,
};

export default TransactionsTable;
