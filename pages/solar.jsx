import { useEffect, useState } from 'react';

import Button from '../components/Button';
import Chart from '../components/Chart';
import SolarAmountCard from '../components/solar/SolarAmountCard';
import SolarPanelStatus from '../components/solar/SolarPanelStatus';
import SolarPaymentCard from '../components/solar/SolarPaymentCard';
import Table from '../components/Table';
import Tabs from '../components/tabs';

import SunIcon from '../public/svgs/sun.svg';
import Empty from '../public/svgs/empty-transcation.svg';

export default function Solar() {
  const headings = [
    'Transaction Information',
    'Date',
    'Distributor',
    'Payment Type',
    'Reference number',
    'Amount',
    'Status',
  ];
  const tableProps = {
    title: 'Your monthly billings',
    iconType: 'sun',
    titleLabel: 'Montly plan',
    viewAll: true,
    tabs: () => (
      <>
        <Tabs
          data={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {data.length <= 0 && (
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl pt-10">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="text-base font-gill">
                Your transactions will appear here
              </div>
              <p className="text-gray-400 text-sm max-w-xs text-center mt-1">
                An email has been sent to you kindly submit to continue with
                this application
              </p>
              <button className="outline-none border-none bg-primary-light text-primary-base font-semibold rounded-lg px-6 text-xs py-2.5 mt-8">
                Request solar
              </button>
            </div>
          </div>
        )}
      </>
    ),
  };

  const tabsData = [
    { name: 'Paid' },
    { name: 'Upcoming' },
    { name: 'Recurring' },
    { name: 'Overdue' },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const data = [];

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  });

  return (
    <div className="pt-5 2xl:pt-10">
      {pageLoading && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex justify-center w-44 items-center  bg-white sm:rounded-lg h-9 relative"></div>
              <div className="flex justify-center w-96 items-center mt-3 bg-white sm:rounded-lg h-7 relative"></div>
            </div>
            <div className="flex justify-center w-44 items-center bg-white sm:rounded-lg h-12 relative"></div>
          </div>
          <div className="grid lg:space-x-5 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <div className="flex justify-center items-center mt-8 bg-white sm:rounded-xl h-44 relative"></div>
              <div className="flex justify-center items-center mt-8 bg-white sm:rounded-xl h-44 relative"></div>
            </div>
            <div className="lg:col-span-4">
              <div className="flex justify-center items-center mt-8 bg-white sm:rounded-xl h-96 relative"></div>
            </div>
          </div>
          <div className="pt-5">
            <div className="grid grid-cols-4 space-x-6">
              <div className="flex justify-center items-center bg-white sm:rounded-xl h-28 relative"></div>
              <div className="flex justify-center items-center bg-white sm:rounded-xl h-28 relative"></div>
              <div className="flex justify-center items-center bg-white sm:rounded-xl h-28 relative"></div>
              <div className="flex justify-center items-center bg-white sm:rounded-xl h-28 relative"></div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl py-52 relative"></div>
        </>
      )}
      {!pageLoading && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-heading font-bold font-gill">
                Your Solar Plan
              </h1>
              <p className="text-md font-medium text-font-muted">
                Always turn off unused appliances
              </p>
            </div>
            <Button>NEW REQUEST</Button>
          </div>
          <div className="grid lg:space-x-5 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <SolarAmountCard />
              <SolarPaymentCard />
            </div>
            <div className="lg:col-span-4">
              <Chart
                title="Consumption Chart"
                selectedMonth={chartSelectedMonth}
                setSelectedMonth={setChartSelectedMonth}
              />
            </div>
          </div>
          <SolarPanelStatus />

          <Table {...tableProps} headings={data.length > 0 ? headings : null}>
            {data?.length > 0 &&
              data.map((el, index) => {
                const active = index + 1 === el;
                return (
                  <tr
                    className="pl-6 py-4 last:-white hover:bg-primary-light"
                    key={index}
                  >
                    <td className="pl-6 py-4  whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`${
                            active ? 'bg-font-green' : 'bg-red-600'
                          } w-12 h-12 rounded-2xl`}
                        >
                          <SunIcon className="mx-auto my-3" />
                        </div>
                        <div className="ml-8">
                          <div>
                            <div className="text-sm font-bold text-font-dark">
                              Electricity Units
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap">
                      <div className="text-sm text-font-grey font-light">
                        Nov 27, 2021
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap">
                      <div className="text-sm text-font-grey font-light">
                        AEDC
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap">
                      <div className="text-sm font-bold">Card</div>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap">
                      <div className="text-sm text-font-grey font-light">
                        GTRE23456789
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">
                      <div className="text-sm  text-font-grey font-light">
                        <span className="font-semibold">NGN</span>
                        <span className="text-font-dark ml-1 font-bold">
                          10, 000
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap text-xs font-medium">
                      {active && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-lg bg-green-100 text-font-green">
                          Reciept
                        </span>
                      )}
                      {!active && (
                        <span className="px-3 py-1 inline-flex relative text-xs leading-5 font-bold rounded-lg bg-red-100 text-red-700">
                          Retry
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
          </Table>
        </>
      )}
    </div>
  );
}
