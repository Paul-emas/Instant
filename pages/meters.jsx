import { useState } from 'react';
import Button from '../components/Button';
import Table from '../components/Table';
import AddMeter from '../components/modals/screens/AddMeter';
import Tabs from '../components/tabs';
import Modal from '../components/modals';

export default function Meters() {
  const tableProps = {
    iconType: 'bulb',
    title: 'Your Meters',
  };

  const tabsData = [{ name: 'Prepaid' }, { name: 'PostPaid' }];
  const [activeTab, setActiveTab] = useState(0);
  const [openAddMeterModal, setOpenAddMeterModal] = useState(false);

  return (
    <>
      <AddMeter open={openAddMeterModal} setOpen={setOpenAddMeterModal} />
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
          <Tabs
            data={tabsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Table>
      </div>
    </>
  );
}
