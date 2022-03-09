import { useEffect, useState } from 'react';
import Link from 'next/link';
import useFetchWalletTransactions from '../../hooks/useFetchWalletTransactions';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import BuyElectricityModal from '../../components/modals/screens/BuyElectricityModal';
import Pagination from '../../components/table/Pagination';
import TransactionsTable from '../../components/table/TransactionsTable';
import TransactionDataWallet from '../../components/table/TransactionDataWallet';
import TransactionDataMobile from '../../components/table/TransactionDataMobile';
import Button from '../../components/Button';
import { setInitAuthentication } from '../../slices/user';

export default function Transactions() {
  const dispatch = useDispatch();
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [totalDocs, setTotalDocs] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const { data, transactions, pageLoading, error, tableLoading, init } =
    useFetchWalletTransactions(itemsPerPage);
  const [paginatedTransactions, setPaginatedTransactions] = useState([]);

  useEffect(() => {
    updateTransactionState(data);
  }, [data]);

  useEffect(() => {
    setPaginatedTransactions(transactions);
  }, [transactions, error]);

  const updateTransactionState = (data) => {
    if (data) {
      const { docs, totalDocs, totalPages } = data;
      setPaginatedTransactions(docs);
      setPageCount(totalPages);
      setTotalDocs(totalDocs);
    }
  };

  return (
    <div className="pb-10">
      {pageLoading && (
        <div className="pt-5 lg:pt-10">
          <div className="relative h-10 w-28 rounded-lg bg-primary-light py-2 px-4 sm:bg-white"></div>
          <div className="mt-5 min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}

      {!pageLoading && (
        <>
          <BuyElectricityModal
            open={openBuyElectricityModal}
            setOpen={setOpenBuyElectricityModal}
          />
          <div className="pt-5 sm:pt-10">
            <Link href="/transactions">
              <button className="relative flex items-center justify-center rounded-lg bg-primary-light py-2 px-4 text-xs font-semibold hover:opacity-80 lg:bg-white lg:text-sm">
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
                <span className="lg:mt-0.5">Go back</span>
              </button>
            </Link>
          </div>
          <TransactionsTable
            title="Wallet transactions"
            loading={tableLoading}
            transactions={paginatedTransactions}
            setOpenBuyElectricityModal={setOpenBuyElectricityModal}
            paginate={() => (
              <Pagination
                items={paginatedTransactions}
                totalItems={totalDocs}
                itemsPerPage={itemsPerPage}
                pageCount={pageCount}
                fetch={(val) => init(val)}
              />
            )}
          >
            <TransactionDataWallet transactions={paginatedTransactions} />
            <TransactionDataMobile transactions={paginatedTransactions} />
          </TransactionsTable>
          <div className="fixed bottom-0 left-0 z-30 mt-5 flex w-full justify-center py-5 sm:hidden">
            <Button onClick={() => dispatch(setInitAuthentication('fundWallet'))}>
              Fund Wallet
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
