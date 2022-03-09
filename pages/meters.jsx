import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Table from '../components/table';
import AddMeter from '../components/modals/screens/AddMeter';
import Tabs from '../components/tabs';

import BulbIcon from '../public/svgs/bulb-db.svg';
import Empty from '../public/svgs/meter-db.svg';

import { getUserMeters } from '../api';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../slices/persist';
import { setUserMeter, userSelector } from '../slices/user';

export default function Meters() {
  const dispatch = useDispatch();
  const { userMeters } = useSelector(userSelector);
  const { token, isLoggedIn } = useSelector(persistSelector);
  const tabsData = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openAddMeterModal, setOpenAddMeterModal] = useState(false);
  const [meters, setMeters] = useState([]);
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(true);

  const tableProps = {
    iconType: 'bulb',
    title: 'Your Meters',
    loading: tableLoading,
    headings: [
      'Meter name',
      'Date added',
      'Distributor',
      'Meter Number',
      'Meter address',
      'Actions',
    ],
    viewAll: function view() {
      return (
        <Button onClick={() => setOpenAddMeterModal(true)}>
          <span className="flex items-center uppercase">
            <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-white text-opacity-70" />{' '}
            <span className="ml-2">Add new meter</span>
          </span>
        </Button>
      );
    },
    tabs: function view() {
      return <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />;
    },
    child: function view() {
      if (meters.length <= 0 && !pageLoading) {
        return (
          <div className="mt-5 flex items-center justify-center bg-white py-32 sm:rounded-xl 2xl:pt-36 2xl:pb-64">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="mt-2 text-base font-bold">{`You've not added any meters yet!`}</div>
              <p className="mt-1 max-w-xs text-center text-sm text-gray-400">
                An email has been sent to you kindly submit to continue with this application
              </p>
              <button
                onClick={() => setOpenAddMeterModal(true)}
                className="mt-8 flex items-center rounded-lg border-none bg-primary-light px-6 py-3 text-xs font-bold uppercase text-primary-base outline-none"
              >
                <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-opacity-70" />{' '}
                <span className="ml-2">Add new meter</span>
              </button>
            </div>
          </div>
        );
      }
    },
  };

  useEffect(() => {
    if (!userMeters) {
      getMeters();
    } else {
      updateMetersState(userMeters);
    }
  }, []);

  async function getMeters() {
    if (token && isLoggedIn) {
      const resp = await getUserMeters(token);

      if (resp?.error) {
        toast.error('Something went wrong');
        setPageLoading(false);
        setTableLoading(false);
      }

      if (resp?.data) {
        updateMetersState(resp?.data);
      }
    }
  }

  function updateMetersState(meters) {
    dispatch(setUserMeter(meters));
    const { docs } = meters;
    setMeters(docs);
    setPageLoading(false);
    setTableLoading(false);
  }

  return (
    <div className="pb-10">
      {pageLoading && (
        <div className="pt-5 sm:pt-10">
          <div className="min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}
      {!pageLoading && (
        <>
          <AddMeter
            open={openAddMeterModal}
            setOpen={setOpenAddMeterModal}
            selectedMeter={selectedMeter}
            setSelectedMeter={setSelectedMeter}
          />
          <div className="pt-0 2xl:pt-7">
            <Table {...tableProps}>
              {!isMobile &&
                meters.map((item, index) => {
                  return (
                    <tr
                      className="last:-white py-4 pl-6 hover:bg-primary-light"
                      key={`${item}${index}`}
                    >
                      <td className="whitespace-nowrap py-4  pl-6">
                        <div className="flex items-center">
                          <div className="flex h-8 w-8 items-center rounded-xl bg-primary-base">
                            <BulbIcon className="mx-auto my-3" />
                          </div>
                          <div className="ml-8">
                            <div>
                              <div className="text-sm font-bold text-font-dark">{item?.label}</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm text-font-grey">
                          {moment(item?.createdAt).utc().format('LLL')}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm text-font-grey">
                          {item?.meter?.provider?.disco?.shortName}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm font-bold">{item?.meter?.number}</div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4">
                        <div className="text-sm text-font-grey">{item?.meter?.address}</div>
                      </td>
                      <td className="whitespace-nowrap px-6  py-4 text-sm text-gray-500">
                        <div className="flex space-x-4">
                          <button
                            onClick={() => {
                              setSelectedMeter(item);
                              setOpenAddMeterModal(true);
                            }}
                            className="rounded-lg bg-primary-light py-1 px-4 text-xs font-bold text-gray-700 active:bg-gray-200"
                          >
                            Edit
                          </button>
                          <button className="rounded-lg bg-red-50 py-2.5 px-3 text-xs font-semibold text-red-600">
                            <FontAwesomeIcon icon={faTrash} className="h-2.5 w-2.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              {isMobile &&
                meters.map((item, index) => (
                  <div
                    className="border-b last:border-none"
                    onClick={() => {
                      setSelectedMeter(item);
                      setOpenAddMeterModal(true);
                    }}
                    key={`${item}${index}`}
                  >
                    <div className="flex items-center justify-between py-3 px-4">
                      <div className="flex">
                        <div className="flex h-8 w-8 items-center rounded-lg bg-secondary-green">
                          <BulbIcon className="mx-auto my-3" />
                        </div>
                        <div className="ml-2">
                          <div className="text-sm font-bold">{item?.label}</div>
                          <div className="text-xs text-primary-base">{item?.meter?.number}</div>
                        </div>
                      </div>
                      <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
            </Table>
          </div>
          {meters.length > 0 && (
            <div className="fixed bottom-0 left-0 z-30 mt-5 flex w-full justify-center py-5 sm:hidden">
              <Button onClick={() => setOpenAddMeterModal(true)}>
                <span className="flex items-center uppercase">
                  <FontAwesomeIcon icon={faPlus} className="h-3 w-3 text-white text-opacity-70" />{' '}
                  <span className="ml-2">Add new meter</span>
                </span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
