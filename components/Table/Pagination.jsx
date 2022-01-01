import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, totalItems, itemsPerPage, fetch }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);

  useEffect(() => {
    setEndOffset(itemOffset + itemsPerPage);
  }, [itemOffset]);

  const handlePageChange = event => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    setItemOffset(newOffset);
    fetch(event.selected);
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between px-2x sm:px-8 py-6 border-t pagination">
        <div className="mt-4 sm:mt-0">
          <p className="text-sm text-gray-500">
            Showing <span>{itemOffset + 1}</span> -{' '}
            <span>{endOffset <= totalItems ? endOffset : totalItems}</span> of{' '}
            <span>{totalItems}</span>
          </p>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Prev"
          marginPagesDisplayed={2}
          className="flex space-x-2 items-center"
        />
      </div>
    </>
  );
};

Pagination.propTypes = {};

export default Pagination;
