import SolarCard from '../components/ads/SolarCard';
import Button from '../components/Button';
import Chart from '../components/Chart';
import Detailbar from '../components/layout/Detailbar';
import Sidebar from '../components/layout/Sidebar';
import Table from '../components/Table';

export default function Dashboard() {
  return (
    <div className="h-screen overflow-x-hidden w-full bg-gray-300">
      <div className="min-h-screen">
        <Sidebar />
        <div className="float-left main mar overflow-x-hidden p-0 bg-primary-light">
          <Detailbar />
          <main className="min-h-screen float-left main-content">
            <div className="container px-5 2xl:px-7 pt-5 2xl:pt-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-heading font-extrabold">
                    Buy Electricity
                  </h1>
                  <p className="text-md font-medium text-font-muted">
                    Never have interrupted power supply, making life easy.
                  </p>
                </div>
                <Button>Buy Electricity</Button>
              </div>
              <Chart />
              <SolarCard />
              <Table />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
