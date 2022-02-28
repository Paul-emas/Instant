import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetchTransaction from '../hooks/useFetchTransaction';
import { persistSelector, setQuickBuy } from '../slices/persist';
import { userSelector } from '../slices/user';

import SolarCard from '../components/ads/SolarCard';
import Button from '../components/Button';
import Chart from '../components/Chart';
import ReferBox from '../components/ReferBox';
import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton';

import WalletCard from '../components/WalletCard';
import TransactionsTable from '../components/table/TransactionsTable';
import TransactionDataDefault from '../components/table/TransactionDataDefault';
import TransactionDataMobile from '../components/table/TransactionDataMobile';
import Modal from '../components/modals';
import Receipt from '../components/modals/Receipt';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { quickbuy, isLoggedIn } = useSelector(persistSelector);
  const { me } = useSelector(userSelector);
  const { transactions, error, pageLoading } = useFetchTransaction(10);

  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [chartSelectedMonth, setChartSelectedMonth] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [openReceiptModal, setOpenReceiptModal] = useState(false);

  useEffect(() => {
    if (quickbuy && !pageLoading) {
      setOpenBuyElectricityModal(true);
      setTimeout(() => {
        dispatch(setQuickBuy(false));
      }, 200);
    }
  }, [pageLoading]);

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
          {openReceiptModal && (
            <Modal
              close={() => setOpenReceiptModal(false)}
              border={false}
              setOpen={setOpenReceiptModal}
            >
              <Receipt receipt={receipt} />
            </Modal>
          )}
          <div className="pt-5 2xl:pt-10">
            <WalletCard className="block sm:hidden" />
            <div className="hidden items-center justify-between sm:flex">
              <div>
                <h1 className="scale-up text-heading  font-bold">
                  {me?.firstName ? `Hello ${me.firstName?.split(' ')[0]},` : 'Buy Electricity'}
                </h1>
                <p className="text-md scale-up font-medium text-font-muted">
                  Recharge meter, Get visibility, Track your spending & Usage
                </p>
              </div>
              <Button onClick={() => setOpenBuyElectricityModal(true)}>BUY ELECTRICITY</Button>
            </div>
            <div className="grid lg:grid-cols-6 lg:space-x-5">
              <div className="scale-up lg:col-span-4">
                <Chart
                  title="Monthly Spend"
                  selectedMonth={chartSelectedMonth}
                  setSelectedMonth={setChartSelectedMonth}
                />
              </div>
              <div className="scale-up lg:col-span-2">
                <ReferBox />
              </div>
            </div>
            <SolarCard className="scale-up hidden lg:block" />
          </div>
          <div className="fixed bottom-0 left-0 z-30 mt-5 flex w-full justify-center py-5 sm:hidden">
            <Button onClick={() => setOpenBuyElectricityModal(true)}>Buy Electricity</Button>
          </div>
          <div className="scale-up">
            <TransactionsTable
              transactions={transactions}
              setReceipt={setReceipt}
              setOpenReceiptModal={setOpenReceiptModal}
              setOpenBuyElectricityModal={setOpenBuyElectricityModal}
            >
              <TransactionDataDefault transactions={transactions} />
              <TransactionDataMobile transactions={transactions} />
            </TransactionsTable>
          </div>
          {isLoggedIn && <SolarCard className="block lg:hidden" />}
        </>
      )}
    </>
  );
}
