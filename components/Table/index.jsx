import RequestLoader from '../loaders/RequestLoader';
import { isMobile } from 'react-device-detect';

const Table = ({
  title,
  headings,
  viewAll,
  titleLabel,
  tabs,
  children,
  loading,
  child,
}) => {
  return (
    <div className="flex flex-col mt-5 bg-white rounded-xl overflow-hidden sm_shadow">
      <div className="py-3 px-7 mt-4">
        <div className="flex items-center justify-center sm:justify-between w-full">
          <h3 className="text-xl font-bold text-font-dark flex items-start">
            <span>{title}</span>
            {titleLabel && (
              <span className="bg-primary-base text-white px-2.5 py-1 mt-1 rounded-lg h-6 ml-2 flex items-center text-xxs font-sans font-semibold">
                {titleLabel}
              </span>
            )}
          </h3>
          <div className="hidden sm:block">{viewAll && viewAll()}</div>
        </div>
      </div>
      {tabs && tabs()}
      <div
        className={`${
          !loading ? 'overflow-x-auto' : ''
        } my-2 sm:-mx-6 lg:-mx-6`}
      >
        <div className="py-2 align-middle inline-block min-w-full sm:px-6">
          {!loading && !isMobile && (
            <div className="overflow-hidden">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    {headings?.map((heading, index) => (
                      <th
                        key={`${heading}${index}`}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-500 tracking-wider"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">{children}</tbody>
              </table>
            </div>
          )}
          {!loading && isMobile && <div>{children}</div>}
          {loading && (
            <div className="py-8 sm:py-44">
              <RequestLoader type="request" />
            </div>
          )}
        </div>
      </div>
      {child && child()}
    </div>
  );
};

export default Table;