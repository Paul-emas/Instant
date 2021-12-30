import { useEffect, useState } from 'react';
import Link from 'next/link';

import SolarCard from '../components/ads/SolarCard';
import Button from '../components/Button';
import Chart from '../components/Chart';
import Table from '../components/Table';
import ReferBox from '../components/ReferBox';
import Tabs from '../components/tabs';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';

import BulbIcon from '../public/svgs/bulb-db.svg';
import Empty from '../public/svgs/empty-transcation.svg';
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getUserTransactions } from '../api';
import cookies from 'js-cookie';
import moment from 'moment';
import { toast } from 'react-toastify';
import WalletCard from '../components/WalletCard';
import { isMobile } from 'react-device-detect';

export default function Dashboard() {
  const token = cookies.get('token');
  const tableProps = {
    title: 'Your transcations',
    headings: [
      'Transaction Information',
      'Date',
      'Distributor',
      'Meter number',
      'Reference number',
      'Amount',
      'Status',
    ],
    viewAll: function view() {
      return (
        <div>
          <Link href="/transactions">
            <button className="py-2.5 rounded-lg w-24 text-sm font-semibold bg-primary-light hover:opacity-80">
              <span className="flex relative items-center justify-center">
                <span className="mr-2">See all</span>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
              </span>
            </button>
          </Link>
        </div>
      );
    },
    tabs: function view() {
      return (
        <Tabs
          data={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      );
    },
    child: function view() {
      if (transactions.length <= 0) {
        return (
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl pt-24 pb-32">
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
    },
  };

  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('quickbuy')) {
      setTimeout(() => {
        setOpenBuyElectricityModal(true);
        localStorage.removeItem('quickbuy');
      }, 200);
    }
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    if (token) {
      const resp = await getUserTransactions(token, 0, 10);

      if (resp?.error) {
        toast.error('Something went wrong');
        setPageLoading(false);
      }

      if (resp?.data) {
        const { docs } = resp?.data;
        setTransactions(docs);
        setPageLoading(false);
      }
    } else {
      setPageLoading(false);
    }
  }

  return (
    <>
      {pageLoading && (
        <div className="pt-5 2xl:pt-10">
          <DashboardSkeleton />
        </div>
      )}
      {!pageLoading && (
        <>
          <BuyElectricityModal
            open={openBuyElectricityModal}
            setOpen={setOpenBuyElectricityModal}
          />
          <div className="pt-5 2xl:pt-10">
            {!pageLoading && (
              <>
                <WalletCard className="block sm:hidden" />
                <div className="hidden sm:flex items-center justify-between">
                  <div>
                    <h1 className="text-heading font-bold ">Buy Electricity</h1>
                    <p className="text-md font-medium text-font-muted">
                      Never have interrupted power supply, making life easy.
                    </p>
                  </div>
                  <Button onClick={() => setOpenBuyElectricityModal(true)}>
                    BUY ELECTRICITY
                  </Button>
                </div>
                <div className="grid lg:space-x-5 lg:grid-cols-6">
                  <div className="lg:col-span-4">
                    <Chart
                      title="Units purchased"
                      selectedMonth={chartSelectedMonth}
                      setSelectedMonth={setChartSelectedMonth}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <ReferBox />
                  </div>
                </div>
                <SolarCard />
                <Table {...tableProps}>
                  {!isMobile &&
                    transactions.map((item, index) => {
                      const active = item?.status === 'success' ? true : false;
                      return (
                        <tr
                          className="pl-6 py-4 last:-white"
                          key={`${item}${index}`}
                        >
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
                              {moment(item?.createdAt).utc().format('L')}{' '}
                              <span className="ml-2">
                                {moment(item?.createdAt).utc().format('LTS')}
                              </span>
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
                            <div className="text-sm font-bold">
                              {item?.reference}
                            </div>
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
                                  Receipt
                                </span>
                              )}
                              {!active && (
                                <span className="px-3 py-1 inline-flex relative text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-600 capitalize">
                                  Retry
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  {isMobile &&
                    transactions.slice(0, 2).map((item, index) => {
                      return (
                        <div className="px-3 py-4" key={`${item}${index}`}>
                          <div className="w-full pb-6 border-2 border-gray-200 rounded-xl bg-white">
                            <div className="flex justify-between items-center py-3 px-4 border-b">
                              <div className="text-sm text-gray-500 font-semibold">
                                Ref: {item?.reference}
                              </div>
                              <div className="text-sm text-gray-500 font-semibold">
                                {moment(item?.createdAt).utc().format('L')}{' '}
                                <span className="ml-1">
                                  {moment(item?.createdAt).utc().format('LTS')}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center py-3 px-4">
                              <div className="text-sm font-bold">
                                Unit purchased
                              </div>
                              <div className="text-sm font-semibold">
                                <span className="font-semibold">
                                  {item?.country?.currency}
                                </span>
                                <span className="text-font-dark ml-1 font-bold">
                                  {item?.amount.toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center px-4 -mt-2">
                              <div className="text-xs font-semibold text-gray-500">
                                {item?.meter?.number}
                              </div>
                              <div className="text-xs text-primary-dark text-opacity-80 font-semibold">
                                {item?.meter?.provider?.disco?.shortName}
                              </div>
                            </div>
                            <div className="px-4 mt-2">
                              <div className="flex">
                                <p className="text-xs py-1 px-3 rounded-md max-w-xs bg-primary-light font-semibold text-primary-base">
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
                  {isMobile && (
                    <div className="flex justify-center pb-5">
                      <Link href="/transactions">
                        <button className="py-2.5 rounded-lg w-24 text-sm font-semibold bg-primary-light hover:opacity-80">
                          <span className="flex relative items-center justify-center">
                            <span className="mr-2">See all</span>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="w-3 h-3"
                            />
                          </span>
                        </button>
                      </Link>
                    </div>
                  )}
                </Table>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
