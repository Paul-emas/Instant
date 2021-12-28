import { useEffect, useState } from 'react';

import WalletCard from '../components/WalletCard';
import Table from '../components/Table';
import Tabs from '../components/tabs';
import Empty from '../public/svgs/empty-transcation.svg';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import Button from '../components/Button';

export default function Payments() {
  const tableProps = {
    title: 'Your transactions',
    headings: [
      'Transaction Information',
      'Date',
      'Distributor',
      'Meter number',
      'Reference number',
      'Amount',
      'Status',
    ],
    viewAll: () => <Button>Wallet History</Button>,
    tabs: () => (
      <Tabs
        data={tabsData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        center
      />
    ),
    emptyState: () => {
      if (transcations.length <= 0 && !pageLoading) {
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
    },
  };

  const tabsData = [{ name: 'Prepaid' }, { name: 'PostPaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [transcations, setTranscations] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  });

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
          <Table {...tableProps}></Table>
        </>
      )}
    </>
  );
}
