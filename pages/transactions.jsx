import { useEffect, useState } from 'react';

import WalletCard from '../components/WalletCard';
import Table from '../components/Table';
import Tabs from '../components/tabs';
import Empty from '../public/svgs/empty-transcation.svg';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import Button from '../components/Button';
import { getUserTransactions } from '../api';
import { toast } from 'react-toastify';
import BulbIcon from '../public/svgs/bulb-db.svg';
import moment from 'moment';
import Pagination from '../components/Table/Pagination';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTransactions, userSelector } from '../slices/user';
import { persistSelector } from '../slices/persist';

export default function Transactions() {
  const dispatch = useDispatch();
  const { userTransactions } = useSelector(userSelector);
  const { token, isLoggedIn } = useSelector(persistSelector);
  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [totalDocs, setTotalDocs] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableLoading, setTabelLoading] = useState(false);

  useEffect(() => {
    if (!userTransactions) {
      fetchTransactions();
    } else {
      updateTransactionState(userTransactions);
    }
  }, [userTransactions]);

  async function fetchTransactions(currentPage = 0) {
    if (token && isLoggedIn) {
      setTabelLoading(true);
      const resp = await getUserTransactions(token, currentPage, itemsPerPage);

      if (resp?.error) {
        toast.error('Something went wrong');
        setPageLoading(false);
        setTabelLoading(false);
      }

      if (resp?.data) {
        pageLoading && dispatch(setUserTransactions(resp.data));
        updateTransactionState(resp.data);
      }
    } else {
      setPageLoading(false);
      setTabelLoading(false);
    }
  }

  const updateTransactionState = transactions => {
    const { page, docs, totalDocs, totalPages } = transactions;
    setTransactions(docs);
    setCurrentPage(page);
    setPageCount(totalPages);
    setPageLoading(false);
    setTabelLoading(false);
    setTotalDocs(totalDocs);
  };

  const tableProps = {
    title: 'Your transactions',
    headings: [
      '#',
      'Transaction Information',
      'Date',
      'Distributor',
      'Meter number',
      'Reference number',
      'Amount',
      'Status',
    ],
    loading: tableLoading,
    viewAll: function view() {
      return <Button>Wallet History</Button>;
    },
    tabs: function view() {
      return (
        <Tabs
          data={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          center
        />
      );
    },
    child: function view() {
      if (transactions.length <= 0 && !pageLoading) {
        return (
          <div className="mt-5 flex items-center justify-center bg-white pt-28 pb-40 sm:rounded-xl">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="text-base font-bold">
                Your transactions will appear here
              </div>
              <p className="mt-1 max-w-xs text-center text-sm text-gray-400">
                An email has been sent to you kindly submit to continue with
                this application
              </p>
              <button
                onClick={() => setOpenBuyElectricityModal(true)}
                className="mt-8 rounded-lg border-none bg-primary-light px-6 py-3 text-xs font-bold uppercase text-primary-base outline-none"
              >
                Recharge a meter
              </button>
            </div>
          </div>
        );
      }

      return (
        <Pagination
          items={transactions}
          totalItems={totalDocs}
          itemsPerPage={itemsPerPage}
          pageCount={pageCount}
          fetch={fetchTransactions}
        />
      );
    },
  };

  return (
    <>
      {pageLoading && (
        <div className="pt-5 sm:pt-10">
          <div className="w-full rounded-3xl bg-primary-light py-16 sm:bg-white"></div>
          <div className="mt-5 min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}
      {!pageLoading && (
        <>
          <BuyElectricityModal
            open={openBuyElectricityModal}
            setOpen={setOpenBuyElectricityModal}
          />
          <div className="pt-5 sm:pt-10">
            <WalletCard />
          </div>
          <Table {...tableProps}>
            {!isMobile &&
              transactions.map((item, index) => {
                const active = item?.status === 'success' ? true : false;
                return (
                  <tr className="last:-white py-4 pl-2" key={`${item}${index}`}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-font-grey">
                        {index + 1 + currentPage * 10}
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4  pl-6">
                      <div className="flex items-center">
                        <div
                          className={`${
                            active ? 'bg-secondary-green' : 'bg-red-600'
                          } flex h-12 w-12 items-center rounded-2xl`}
                        >
                          <BulbIcon className="mx-auto my-3" />
                        </div>
                        <div className="ml-8">
                          <div>
                            <div className="text-sm font-bold text-font-dark">
                              Units Purchased
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6  py-4">
                      <div className="text-sm text-font-grey">
                        {moment(item?.createdAt).utc().format('L')}{' '}
                        <span className="ml-2">
                          {moment(item?.createdAt).utc().format('LTS')}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6  py-4">
                      <div className="text-sm text-font-grey">
                        {item?.meter?.provider?.disco?.shortName}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6  py-4">
                      <div className="text-sm text-font-grey">
                        {item?.meter?.number}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6  py-4">
                      <div className="text-sm font-bold">{item?.reference}</div>
                    </td>
                    <td className="whitespace-nowrap px-6  py-4">
                      <div className="text-sm font-bold">
                        <div className="text-sm  text-font-grey">
                          <span className="font-semibold">
                            {item?.country?.currency}
                          </span>
                          <span className="ml-1 font-bold text-font-dark">
                            {item?.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6  py-4">
                      <button className="text-sm font-bold">
                        {active && (
                          <span className="inline-flex rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-font-green active:bg-green-200">
                            Receipt
                          </span>
                        )}
                        {!active && (
                          <span className="relative inline-flex rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold capitalize leading-5 text-red-600 active:bg-red-200">
                            Retry
                          </span>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            {isMobile &&
              transactions.map((item, index) => {
                return (
                  <div className="px-3 py-4" key={`${item}${index}`}>
                    <div className="w-full rounded-xl border-2 border-gray-200 bg-white pb-6">
                      <div className="flex items-center justify-between border-b py-3 px-4">
                        <div className="text-sm font-semibold text-gray-500">
                          Ref: {item?.reference}
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                          {moment(item?.createdAt).utc().format('L')}{' '}
                          <span className="ml-1">
                            {moment(item?.createdAt).utc().format('LTS')}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-3 px-4">
                        <div className="text-sm font-bold">Unit purchased</div>
                        <div className="text-sm font-semibold">
                          <span className="font-semibold">
                            {item?.country?.currency}
                          </span>
                          <span className="ml-1 font-bold text-font-dark">
                            {item?.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="-mt-2 flex items-center justify-between px-4">
                        <div className="text-xs font-semibold text-gray-500">
                          {item?.meter?.number}
                        </div>
                        <div className="text-xs font-semibold text-primary-dark text-opacity-80">
                          {item?.meter?.provider?.disco?.shortName}
                        </div>
                      </div>
                      <div className="mt-2 px-4">
                        <div className="flex">
                          <p className="max-w-xs rounded-md bg-primary-light py-1 px-3 text-xs font-semibold text-primary-base">
                            <span className="truncate">
                              {item?.meter?.address}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Table>
        </>
      )}
    </>
  );
}
