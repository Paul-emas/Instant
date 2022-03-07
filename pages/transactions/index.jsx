import { useEffect, useState } from 'react';
import useFetchTransaction from '../../hooks/useFetchTransaction';

import WalletCard from '../../components/WalletCard';
import BuyElectricityModal from '../../components/modals/screens/BuyElectricityModal';
import Pagination from '../../components/table/Pagination';
import TransactionsTable from '../../components/table/TransactionsTable';
import TransactionDataDefault from '../../components/table/TransactionDataDefault';
import TransactionDataMobile from '../../components/table/TransactionDataMobile';
import Modal from '../../components/modals';
import Receipt from '../../components/modals/Receipt';

export default function Transactions() {
  const [openBuyElectricityModal, setOpenBuyElectricityModal] = useState(false);
  const [totalDocs, setTotalDocs] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [paginatedTransactions, setPaginatedTransactions] = useState(transactions);
  const { data, transactions, pageLoading, error, tableLoading, init } =
    useFetchTransaction(itemsPerPage);

  const [receipt, setReceipt] = useState(null);
  const [openReceiptModal, setOpenReceiptModal] = useState(false);

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
        <div className="pt-5 sm:pt-10">
          <div className="w-full rounded-3xl bg-primary-light py-16 sm:bg-white"></div>
          <div className="mt-5 min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
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
          <div className="pt-5 sm:pt-10">
            <WalletCard />
          </div>
          <TransactionsTable
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
            <TransactionDataDefault
              setReceipt={setReceipt}
              setOpenReceiptModal={setOpenReceiptModal}
              transactions={paginatedTransactions}
            />
            <TransactionDataMobile transactions={paginatedTransactions} />
          </TransactionsTable>
        </>
      )}
    </div>
  );
}
