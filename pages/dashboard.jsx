import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { persistSelector } from '../slices/persist';
import { toast } from 'react-toastify';
import { setUserTransactions, userSelector } from '../slices/user';
import { getUserTransactions } from '../api';

import BulbIcon from '../public/svgs/bulb-db.svg';
import Empty from '../public/svgs/empty-transcation.svg';
import SolarCard from '../components/ads/SolarCard';
import Button from '../components/Button';
import Chart from '../components/Chart';
import Table from '../components/Table';
import ReferBox from '../components/ReferBox';
import Tabs from '../components/tabs';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton';

import WalletCard from '../components/WalletCard';

export default function Dashboard() {
  const { userTransactions } = useSelector(userSelector);
  const { token, quickbuy, isLoggedIn } = useSelector(persistSelector);
  const dispatch = useDispatch();
  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

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
            <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
              <span className="relative flex items-center justify-center">
                <span className="mr-2">See all</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
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
          <div className="mt-5 flex items-center justify-center bg-white pt-24 pb-32 sm:rounded-xl">
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
    },
  };

  useEffect(() => {
    if (!userTransactions) {
      fetchTransactions();
    } else {
      setTransactions(userTransactions?.docs);
      setPageLoading(false);
    }

    if (quickbuy) {
      setTimeout(() => {
        setOpenBuyElectricityModal(true);
      }, 200);
    }
  }, [userTransactions]);

  async function fetchTransactions() {
    if (token && isLoggedIn) {
      const resp = await getUserTransactions(token, 0, 10);

      if (resp?.error) {
        toast.error('Something went wrong');
        setPageLoading(false);
      }

      if (resp?.data) {
        dispatch(setUserTransactions(resp.data));
        const { docs } = resp.data;
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
                <div className="hidden items-center justify-between sm:flex">
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
                <div className="grid lg:grid-cols-6 lg:space-x-5">
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
                <SolarCard className="hidden lg:block" />
                <Table {...tableProps}>
                  {!isMobile &&
                    transactions.map((item, index) => {
                      const active = item?.status === 'success' ? true : false;
                      return (
                        <tr
                          className="last:-white py-4 pl-6"
                          key={`${item}${index}`}
                        >
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
                                    Unit Purchased
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
                            <div className="text-sm font-bold">
                              {item?.reference}
                            </div>
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
                  {isMobile &&
                    transactions.slice(0, 2).map((item, index) => {
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
                              <div className="text-sm font-bold">
                                Unit purchased
                              </div>
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
                  {isMobile && transactions.length > 0 && (
                    <div className="flex justify-center pb-5">
                      <Link href="/transactions">
                        <button className="w-24 rounded-lg bg-primary-light py-2.5 text-sm font-semibold hover:opacity-80">
                          <span className="relative flex items-center justify-center">
                            <span className="mr-2">See all</span>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="h-3 w-3"
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
          <div className="mt-5 flex justify-center sm:hidden">
            <Button onClick={() => setOpenBuyElectricityModal(true)}>
              Buy Electricity
            </Button>
          </div>
          {isLoggedIn && <SolarCard className="block lg:hidden" />}
        </>
      )}
    </>
  );
}
