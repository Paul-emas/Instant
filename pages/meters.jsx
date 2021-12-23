import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Table from '../components/Table';
import AddMeter from '../components/modals/screens/AddMeter';
import Tabs from '../components/tabs';

import BulbIcon from '../public/svgs/bulb-dashed.svg';
import Empty from '../public/svgs/empty-transcation.svg';

import { getUserMeters } from '../api';
import { toast } from 'react-toastify';

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
    tabs: () => (
      <Tabs
        data={tabsData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        center
      />
    ),
  };

  const tabsData = [{ name: 'Prepaid' }, { name: 'PostPaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openAddMeterModal, setOpenAddMeterModal] = useState(false);
  const [meters, setMeters] = useState([]);
  const [selectedMeter, setSelectedMeter] = useState(null);

  useEffect(() => {
    getMeters();
  }, []);

  async function getMeters() {
    const { error, data } = await getUserMeters();

    if (error) {
      toast('Something went wrong');
    }

    if (data) {
      console.log(data);
      setMeters(data?.docs);
    }
  }

  console.log(meters);

  return (
    <>
      <AddMeter
        open={openAddMeterModal}
        setOpen={setOpenAddMeterModal}
        selectedMeter={selectedMeter}
      />
      <div className="pt-5 2xl:pt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading font-bold font-gill">My Meters</h1>
          </div>
          <Button onClick={() => setOpenAddMeterModal(true)}>
            <span className="uppercase">+ Add new meter</span>
          </Button>
        </div>
        <Table {...tableProps}>
          {meters.map((item, index) => {
            return (
              <tr
                className="pl-6 py-4 last:-white hover:bg-gray-50"
                key={index}
              >
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
                  <div className="text-sm text-font-grey font-light">
                    {item?.createdAt}
                  </div>
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  <div className="text-sm text-font-grey font-light">
                    {item?.meter?.provider?.disco?.shortName}
                  </div>
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  <div className="text-sm font-bold">{item?.meter?.number}</div>
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  <div className="text-sm text-font-grey font-light">
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
                      className="py-1.5 px-3 bg-primary-light rounded-lg text-gray-700 font-semibold text-xs"
                    >
                      Edit info
                    </button>
                    <button className="py-1.5 px-3 bg-primary-light rounded-lg text-red-600 font-semibold text-xs">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </>
  );
}
