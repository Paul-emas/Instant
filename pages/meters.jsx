import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import useFetchMeters from '../hooks/useFetchMeters';

import AddMeter from '../components/modals/screens/AddMeter';
import MetersTable from '../components/table/MetersTable';
import Button from '../components/Button';
import MetersDataDefault from '../components/table/MetersDataDefault';
import MetersDataMobile from '../components/table/MetersDataMobile';

export default function Meters() {
  const headings = ['Meter name', 'Date added', 'Distributor', 'Meter Number', 'Meter address', 'Actions'];
  const { meters, pageLoading } = useFetchMeters();
  const [openAddMeterModal, setOpenAddMeterModal] = useState(false);
  const [selectedMeter, setSelectedMeter] = useState(null);

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
          <div className="pt-0 lg:pt-5 2xl:pt-7">
            <MetersTable
              meters={meters}
              headings={headings}
              setOpenAddMeterModal={setOpenAddMeterModal}
              mobileView={() => (
                <MetersDataMobile
                  meters={meters}
                  setSelectedMeter={setSelectedMeter}
                  setOpenAddMeterModal={setOpenAddMeterModal}
                />
              )}
            >
              <MetersDataDefault
                meters={meters}
                setSelectedMeter={setSelectedMeter}
                setOpenAddMeterModal={setOpenAddMeterModal}
              />
            </MetersTable>
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

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}
