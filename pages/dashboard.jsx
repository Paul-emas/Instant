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
import SunIcon from '../public/svgs/sun.svg';
import Empty from '../public/svgs/empty-transcation.svg';
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faDownload,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';
import { getUserTransactions } from '../api';
import cookies from 'js-cookie';
import moment from 'moment';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const token = cookies.get('token');
  const tableProps = {
    title: 'Your transcations',
    headings: [
      'Transaction Information',
      'Date',
      'Distributor',
      'Payment Type',
      'Reference number',
      'Amount',
      'Status',
    ],
    viewAll: function view() {
      return (
        <div>
          <Link href="/payments">
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
    emptyState: function view() {
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

  const tabsData = [{ name: 'Prepaid' }, { name: 'PostPaid' }];
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
    const resp = await getUserTransactions(token);

    if (resp?.error) {
      toast.error('Something went wrong');
      setPageLoading(false);
    }

    if (resp?.data) {
      const { docs } = resp?.data;
      setTransactions(docs);
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
                <div className="flex items-center justify-between">
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
                      title="Electricity units purchased"
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
                  {transactions.map((item, index) => {
                    const active = item?.status === 'success' ? true : false;
                    return (
                      <tr
                        className="pl-6 py-4 last:-white"
                        key={`${item}${index}`}
                      >
                        <td className="pl-6 py-4  whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center rounded-2xl bg-secondary-green">
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
                      </tr>
                    );
                  })}
                </Table>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
