import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = ({
  title,
  headings,
  viewAll,
  titleLabel,
  tabs,
  children,
  emptyState,
}) => {
  return (
    <div className="flex flex-col mt-5 bg-white sm:rounded-xl">
      <div className="py-3 px-7 mt-4">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold text-font-dark flex items-start">
            <span>{title}</span>
            {titleLabel && (
              <span className="bg-primary-base text-white px-2.5 py-1 mt-1 rounded-lg h-6 ml-2 flex items-center text-xxs font-sans font-semibold">
                {titleLabel}
              </span>
            )}
          </h3>
          {viewAll && viewAll()}
        </div>
      </div>
      {tabs && tabs()}
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-6 pb-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6">
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
        </div>
      </div>
      {emptyState && emptyState()}
    </div>
  );
};

export default Table;
