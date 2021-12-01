import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BulbIcon from '../public/svgs/bulb-dashed.svg';
import SunIcon from '../public/svgs/sun.svg';

const Table = ({ title, iconType, viewAll, titleLabel, children }) => {
  const data = [1, 0, 3, 2, 5, 6];
  return (
    <div className="flex flex-col mt-5 bg-white sm:rounded-xl">
      <div className="py-3 px-7 mt-4">
        <div className="flex items-start justify-between w-full">
          <h3 className="text-xl font-gill font-semibold text-font-dark flex items-start">
            <span>{title}</span>
            {titleLabel && (
              <span className="bg-primary-base text-white px-2.5 py-1 mt-1 rounded-lg h-6 ml-2 flex items-center text-xxs font-sans font-bold">
                {titleLabel}
              </span>
            )}
          </h3>
          {viewAll && (
            <div>
              <button className="py-2 rounded-lg w-24 text-sm font-semibold bg-primary-light hover:opacity-80">
                <span className="flex relative items-center justify-center">
                  <span className="mt-0.5 mr-2">See all</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      {children}
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-6 pb-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-7">
          <div className="overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Transaction Information
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Distributor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Payment Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Reference number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xxs font-semibold text-gray-500 tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((el, index) => {
                  const active = index + 1 === el;
                  return (
                    <tr className="pl-6 py-4  last:-white" key={index}>
                      <td className="pl-6 py-4  whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className={`${
                              active ? 'bg-font-green' : 'bg-red-600'
                            } w-12 h-12 rounded-2xl`}
                          >
                            {iconType === 'bulb' && (
                              <BulbIcon className="mx-auto my-3" />
                            )}
                            {iconType === 'sun' && (
                              <SunIcon className="mx-auto my-3" />
                            )}
                          </div>
                          <div className="ml-8">
                            <div>
                              <div className="text-sm font-bold text-font-dark">
                                Electricity Units
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm text-font-grey font-light">
                          Nov 27, 2021
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm text-font-grey font-light">
                          AEDC
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm font-bold">Card</div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm text-font-grey font-light">
                          GTRE23456789
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">
                        <div className="text-sm  text-font-grey font-light">
                          <span className="font-semibold">NGN</span>
                          <span className="text-font-dark ml-1 font-bold">
                            10, 000
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap text-xs font-medium">
                        {active && (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-lg bg-green-100 text-font-green">
                            Reciept
                          </span>
                        )}
                        {!active && (
                          <span className="px-3 py-1 inline-flex relative text-xs leading-5 font-bold rounded-lg bg-red-100 text-red-700">
                            Retry
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
