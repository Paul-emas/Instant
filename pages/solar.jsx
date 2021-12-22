import { useState } from 'react';

import Button from '../components/Button';
import Chart from '../components/Chart';
import SolarAmountCard from '../components/solar/SolarAmountCard';
import SolarPanelStatus from '../components/solar/SolarPanelStatus';
import SolarPaymentCard from '../components/solar/SolarPaymentCard';
import Table from '../components/Table';
import Tabs from '../components/tabs';

export default function Solar() {
  const tableProps = {
    title: 'Your monthly billings',
    headings: [
      'Transaction Information',
      'Date',
      'Distributor',
      'Payment Type',
      'Reference number',
      'Amount',
      'Status',
    ],
    iconType: 'sun',
    titleLabel: 'Montly plan',
    viewAll: true,
  };

  const tabsData = [
    { name: 'Paid' },
    { name: 'Upcoming' },
    { name: 'Recurring' },
    { name: 'Overdue' },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);

  return (
    <div className="pt-5 2xl:pt-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading font-bold font-gill">Your Solar Plan</h1>
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
      <Table {...tableProps}>
        <Tabs
          data={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Table>
    </div>
  );
}
