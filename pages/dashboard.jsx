import SolarCard from '../components/ads/SolarCard';
import Button from '../components/Button';
import Chart from '../components/Chart';
import Table from '../components/Table';

export default function Dashboard() {
  return (
    <div className="pt-5 2xl:pt-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading font-extrabold">Buy Electricity</h1>
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
  );
}
