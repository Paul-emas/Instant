import { useEffect, useState } from 'react';

import WalletCard from '../components/WalletCard';
import Table from '../components/Table';
import Tabs from '../components/tabs';
import Empty from '../public/svgs/empty-transcation.svg';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import Button from '../components/Button';
import { getUserTransactions } from '../api';
import cookies from 'js-cookie';
import { toast } from 'react-toastify';
import BulbIcon from '../public/svgs/bulb-db.svg';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRedo } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../components/Table/Pagination';

export default function Payments() {
  const token = cookies.get('token');

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions(currentPage = 0) {
    if (token) {
      setTabelLoading(true);
      const resp = await getUserTransactions(token, currentPage, itemsPerPage);

      if (resp?.error) {
        toast.error('Something went wrong');
        setPageLoading(false);
        setTabelLoading(false);
      }

      if (resp?.data) {
        const { page, docs, totalDocs, totalPages } = resp?.data;
        setCurrentPage(page);
        setTransactions(docs);
        setPageCount(totalPages);
        setPageLoading(false);
        setTabelLoading(false);
        setTotalDocs(totalDocs);
      }
    } else {
      setPageLoading(false);
      setTabelLoading(false);
    }
  }

  const tabsData = [{ name: 'Prepaid' }, { name: 'PostPaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [totalDocs, setTotalDocs] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableLoading, setTabelLoading] = useState(true);

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
      'Actions',
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
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl pt-28 pb-40">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="text-base font-bold">
                Your transactions will appear here
              </div>
              <p className="text-gray-400 text-sm max-w-xs text-center mt-1">
                An email has been sent to you kindly submit to continue with
                this application
              </p>
              <button
                onClick={() => setOpenBuyElectricityModal(true)}
                className="outline-none border-none bg-primary-light text-primary-base font-bold rounded-lg px-6 text-xs py-3 mt-8 uppercase"
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
        <div className="pt-10">
          <div className="bg-white rounded-3xl w-full py-16"></div>
          <div className="bg-white w-full min-h-screen rounded-xl mt-5"></div>
        </div>
      )}
      {!pageLoading && (
        <>
          <BuyElectricityModal
            open={openBuyElectricityModal}
            setOpen={setOpenBuyElectricityModal}
          />
          <div className="pt-10">
            <WalletCard />
          </div>
          <Table {...tableProps}>
            {transactions.map((item, index) => {
              const active = item?.status === 'success' ? true : false;
              return (
                <tr className="pl-2 py-4 last:-white" key={`${item}${index}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-font-grey">
                      {index + 1 + currentPage * 10}
                    </div>
                  </td>
                  <td className="pl-6 py-4  whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`${
                          active ? 'bg-secondary-green' : 'bg-red-600'
                        } w-12 h-12 flex items-center rounded-2xl`}
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
                  <td className="px-6 py-4  whitespace-nowrap">
                    <div className="text-sm text-font-grey">
                      {moment(item?.createdAt).utc().format('LLL')}
                    </div>
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap">
                    <div className="text-sm text-font-grey">
                      {item?.meter?.provider?.disco?.shortName}
                    </div>
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap">
                    <div className="text-sm text-font-grey">
                      {item?.meter?.number}
                    </div>
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap">
                    <div className="text-sm font-bold">{item?.reference}</div>
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap">
                    <div className="text-sm font-bold">
                      <div className="text-sm  text-font-grey">
                        <span className="font-semibold">
                          {item?.country?.currency}
                        </span>
                        <span className="text-font-dark ml-1 font-bold">
                          {item?.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap">
                    <div className="text-sm font-bold">
                      {active && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-font-green capitalize">
                          {item?.status}
                        </span>
                      )}
                      {!active && (
                        <span className="px-3 py-1 inline-flex relative text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-600 capitalize">
                          {item?.status}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {}}
                        className="py-1.5 px-3 bg-primary-light active:bg-gray-200 rounded-lg text-gray-700 font-semibold text-xs flex items-center"
                      >
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="w-2.5 h-2.5"
                        />
                      </button>
                      <button
                        onClick={() => {}}
                        className="py-2.5 px-3 bg-primary-light active:bg-gray-200 rounded-lg font-semibold text-xs flex items-center"
                      >
                        <FontAwesomeIcon
                          icon={faRedo}
                          className="w-2.5 h-2.5 text-gray-700"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </Table>
        </>
      )}
    </>
  );
}
