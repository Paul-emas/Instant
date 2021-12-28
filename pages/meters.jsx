import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Table from '../components/Table';
import AddMeter from '../components/modals/screens/AddMeter';
import Tabs from '../components/tabs';

import BulbIcon from '../public/svgs/bulb-dashed.svg';
import Empty from '../public/svgs/empty-transcation.svg';

import { getUserMeters } from '../api';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export default function Meters() {
  const tableProps = {
    iconType: 'bulb',
    title: 'Your Meters',
    headings: [
      'Meter name',
      'Date added',
      'Distributor',
      'Meter Number',
      'Meter address',
      'Actions',
    ],
    viewAll: () => (
      <Button onClick={() => setOpenAddMeterModal(true)}>
        <span className="uppercase flex items-center">
          <FontAwesomeIcon
            icon={faPlus}
            className="w-3 h-3 text-white text-opacity-70"
          />{' '}
          <span className="ml-2">Add new meter</span>
        </span>
      </Button>
    ),
    tabs: () => (
      <Tabs
        data={tabsData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        center
      />
    ),
    emptyState: () => {
      if (meters.length <= 0 && !pageLoading) {
        return (
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl py-32 2xl:pt-36 2xl:pb-64">
            <div className="flex flex-col items-center">
              <Empty />
              <div className="text-base font-bold">
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

  const tabsData = [{ name: 'Prepaid' }, { name: 'PostPaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openAddMeterModal, setOpenAddMeterModal] = useState(false);
  const [meters, setMeters] = useState([]);
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    getMeters();
  }, []);

  async function getMeters() {
    const resp = await getUserMeters();

    if (resp?.error) {
      toast.error('Something went wrong');
      setPageLoading(false);
    }

    if (resp?.data) {
      setMeters(resp?.data?.docs);
      setPageLoading(false);
    }
  }

  return (
    <>
      {pageLoading && (
        <div className="pt-10">
          <div className="bg-white w-full min-h-screen rounded-xl"></div>
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
          <div className="pt-5 2xl:pt-7">
            <Table {...tableProps}>
              {meters.map((item, index) => {
                return (
                  <tr className="pl-6 py-4 last:-white" key={index}>
                    <td className="pl-6 py-4  whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-2xl bg-secondary-green">
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
                        <button className="py-1.5 px-3 bg-red-50 rounded-lg text-red-600 font-semibold text-xs">
                          <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </div>
        </>
      )}
    </>
  );
}
