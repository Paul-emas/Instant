import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector, setQuickBuy } from '../slices/persist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { getAccountToken, getUserTransactions } from '../api';

import BuyElectricityModal from '../components/modals/screens/BuyElectricityModal';
import Header from '../components/homepage/Header';
import BuyCard from '../components/BuyCard';
import BuyAdsCard from '../components/BuyAdsCard';
import TransactionsTable from '../components/table/TransactionsTable';
import TransactionDataDefault from '../components/table/TransactionDataDefault';
import TransactionDataMobile from '../components/table/TransactionDataMobile';
import Footer from '../components/homepage/Footer';
import Button from '../components/Button';

export default function QuickBuy() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { quickbuy, userPhone, isLoggedIn } = useSelector(persistSelector);
  const [transactions, setTransactions] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);

  useEffect(() => {
    if (quickbuy && !isLoggedIn) {
      setOpenBuyElectricityModal(true);
      setTimeout(() => {
        dispatch(setQuickBuy(false));
      }, 200);
    } else {
      router.push('/dashboard');
    }
    fetchTransaction();
  }, []);

  async function fetchTransaction() {
    const paylaod = {
      phone: userPhone?.phone,
      country: userPhone?.country?.name,
      email: 'test@gmail.com',
    };
    const resp = await getAccountToken(paylaod);

    if (resp?.data) {
      const { data } = await getUserTransactions(resp?.data?.authorization, 0, 6);
      setTransactions(data?.docs);
      setTableLoading(false);
    }
  }

  return (
    <>
      <div className="pb-20">
        <BuyElectricityModal open={openBuyElectricityModal} setOpen={setOpenBuyElectricityModal} />
        <Header bg="bg-primary-light">
          <div className="relative top-24 lg:top-32">
            <Link href="/">
              <button className="relative flex items-center justify-center rounded-lg bg-white py-2 px-4 text-xs font-semibold hover:opacity-80 lg:text-sm">
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
                <span className="mt-0.5">Go back home</span>
              </button>
            </Link>
            <div className="relative top-8 justify-between space-y-4 lg:top-0 lg:mt-20 lg:flex lg:space-x-8 lg:space-y-0 2xl:space-x-20">
              <BuyCard setOpenBuyElectricityModal={setOpenBuyElectricityModal} />
              <BuyAdsCard />
            </div>
          </div>
        </Header>
        <div className="mx-auto px-4 xl:container xl:px-14">
          <div className="mt-28 lg:-mt-96">
            <TransactionsTable
              transactions={transactions}
              loading={tableLoading}
              setOpenBuyElectricityModal={setOpenBuyElectricityModal}
            >
              <TransactionDataDefault transactions={transactions} />
              <TransactionDataMobile transactions={transactions} />
            </TransactionsTable>
          </div>
        </div>
        <div className="bg-white py-8 lg:py-16">
          <div className="mx-auto px-4 xl:container xl:px-14">
            <div className="overlay w-full rounded-xl bg-primary-base py-16 text-center lg:py-24">
              <div className="px-8 text-2xl font-bold leading-snug text-white lg:text-3.5xl">
                Having trouble with a transaction?
              </div>
              <p className="px-5 text-gray-300">
                Earn and save more when you create an account with us.
              </p>
              <div className="mt-12">
                <Button white>Talk to customer care</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
