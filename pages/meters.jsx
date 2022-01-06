import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Table from '../components/Table';
import AddMeter from '../components/modals/screens/AddMeter';
import Tabs from '../components/tabs';

import BulbIcon from '../public/svgs/bulb-db.svg';
import Empty from '../public/svgs/meter-db.svg';

import { getUserMeters } from '../api';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
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
          <span className="uppercase flex items-center">
            <FontAwesomeIcon
              icon={faPlus}
              className="w-3 h-3 text-white text-opacity-70"
            />{' '}
            <span className="ml-2">Add new meter</span>
          </span>
        </Button>
      );
    },
    tabs: function view() {
      return (
        <Tabs
          data={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          center
        />
      );
    },
    child: function view() {
      if (meters.length <= 0 && !pageLoading) {
        return (
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl py-32 2xl:pt-36 2xl:pb-64">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="text-base font-bold mt-2">
                {`You've not added any meters yet!`}
              </div>
              <p className="text-gray-400 text-sm max-w-xs text-center mt-1">
                An email has been sent to you kindly submit to continue with
                this application
              </p>
              <button
                onClick={() => setOpenAddMeterModal(true)}
                className="outline-none uppercase border-none bg-primary-light text-primary-base font-bold rounded-lg px-6 text-xs py-3 mt-8 flex items-center"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="w-3 h-3 text-opacity-70"
                />{' '}
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
    <>
      {pageLoading && (
        <div className="pt-5 sm:pt-10">
          <div className="bg-primary-light sm:bg-white w-full min-h-screen rounded-xl"></div>
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
                      className="pl-6 py-4 last:-white"
                      key={`${item}${index}`}
                    >
                      <td className="pl-6 py-4  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-2xl bg-secondary-green flex items-center">
                            <BulbIcon className="mx-auto my-3" />
                          </div>
                          <div className="ml-8">
                            <div>
                              <div className="text-sm font-bold text-font-dark">
                                {item?.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm text-font-grey">
                          {moment(item?.createdAt).utc().format('LLL')}
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm text-font-grey">
                          {item?.meter?.provider?.disco?.shortName}
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm font-bold">
                          {item?.meter?.number}
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap">
                        <div className="text-sm text-font-grey">
                          {item?.meter?.address}
                        </div>
                      </td>
                      <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-4">
                          <button
                            onClick={() => {
                              setSelectedMeter(item);
                              setOpenAddMeterModal(true);
                            }}
                            className="py-1.5 px-3 bg-primary-light active:bg-gray-200 rounded-lg text-gray-700 font-semibold text-xs"
                          >
                            Edit info
                          </button>
                          <button className="py-2.5 px-3 bg-red-50 rounded-lg text-red-600 font-semibold text-xs">
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="w-2.5 h-2.5"
                            />
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
                    <div className="flex justify-between items-center py-3 px-4">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-lg bg-secondary-green flex items-center">
                          <BulbIcon className="mx-auto my-3" />
                        </div>
                        <div className="ml-2">
                          <div className="text-sm font-bold">{item?.label}</div>
                          <div className="text-xs text-primary-base">
                            {item?.meter?.number}
                          </div>
                        </div>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-4 h-4 text-gray-400"
                      />
                    </div>
                  </div>
                ))}
            </Table>
          </div>
          {meters.length > 0 && (
            <div className="flex sm:hidden justify-center mt-5">
              <Button onClick={() => setOpenAddMeterModal(true)}>
                <span className="uppercase flex items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="w-3 h-3 text-white text-opacity-70"
                  />{' '}
                  <span className="ml-2">Add new meter</span>
                </span>
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
