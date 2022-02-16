import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { persistSelector, setQuickBuy } from '../slices/persist';
import useFetchTransaction from '../hooks/useFetchTransaction';

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
import gsap from 'gsap';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { quickbuy, isLoggedIn } = useSelector(persistSelector);
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

  useEffect(() => {
    const el = gsap.utils.toArray('.scale-up');
    const tl = gsap.timeline({});
    tl.fromTo(
      el,
      { autoAlpha: 0, scaleY: 0.95, display: 'none' },
      { autoAlpha: 1, scaleY: 1, stagger: 0.3, duration: 0.4, display: 'block', delay: 0.2 },
    );
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
                <h1 className="scale-up text-heading  font-bold">Buy Electricity</h1>
                <p className="text-md scale-up font-medium text-font-muted">
                  Never have interrupted power supply, making life easy.
                </p>
              </div>
              <Button onClick={() => setOpenBuyElectricityModal(true)}>BUY ELECTRICITY</Button>
            </div>
            <div className="grid lg:grid-cols-6 lg:space-x-5">
              <div className="scale-up lg:col-span-4">
                <Chart
                  title="Units purchased"
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
