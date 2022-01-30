import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector, setQuickBuy } from '../slices/persist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';

import Header from '../components/homepage/Header';
import BuyCard from '../components/BuyCard';
import BuyAdsCard from '../components/BuyAdsCard';
import TransactionsTable from '../components/Table/TransactionsTable';
import TransactionDataDefault from '../components/table/TransactionDataDefault';
import TransactionDataMobile from '../components/table/TransactionDataMobile';
import useFetchTransaction from '../hooks/useFetchTransaction';
import Footer from '../components/homepage/Footer';

export default function QuickBuy() {
  const dispatch = useDispatch();
  const { quickbuy } = useSelector(persistSelector);
  const { transactions, error, pageLoading } = useFetchTransaction(0, 10);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);

  useEffect(() => {
    if (quickbuy) {
      setOpenBuyElectricityModal(true);
      setTimeout(() => {
        dispatch(setQuickBuy(false));
      }, 200);
    }
  }, []);

  return (
    <>
      <div className="pb-20">
        <BuyElectricityModal
          open={openBuyElectricityModal}
          setOpen={setOpenBuyElectricityModal}
        />
        <Header>
          <div className="relative top-32">
            <Link href="/">
              <button className="relative flex items-center justify-center rounded-lg bg-white py-2 px-4 text-sm font-semibold hover:opacity-80">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="mr-2 h-3 w-3"
                />
                <span className="mt-0.5">Go back home</span>
              </button>
            </Link>
            <div className="mt-20 justify-between space-x-8 lg:flex 2xl:space-x-20">
              <BuyCard
                setOpenBuyElectricityModal={setOpenBuyElectricityModal}
              />
              <BuyAdsCard />
            </div>
          </div>
        </Header>
        <div className="mx-auto -mt-96 px-3 xl:container xl:px-14">
          <TransactionsTable
            transactions={transactions}
            setOpenBuyElectricityModal={setOpenBuyElectricityModal}
          >
            <TransactionDataDefault transactions={transactions} />
            <TransactionDataMobile transactions={transactions} />
          </TransactionsTable>
        </div>
      </div>
      <Footer />
    </>
  );
}
