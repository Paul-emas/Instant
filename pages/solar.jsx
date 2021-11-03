import Button from '../components/Button';
import Chart from '../components/Chart';
import SolarAmountCard from '../components/solar/SolarAmountCard';
import SolarPaymentCard from '../components/solar/SolarPaymentCard';

export default function Solar() {
  return (
    <div className="pt-5 2xl:pt-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading font-extrabold">Your Solar Plan</h1>
          <p className="text-md font-medium text-font-muted">
            Always turn off unused appliances
          </p>
        </div>
        <Button>NEW REQUEST</Button>
      </div>
      <div className="grid lg:space-x-5 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <SolarAmountCard />
          <SolarPaymentCard />
        </div>
        <div className="lg:col-span-4">
          <Chart title="Consumption Chart" />
        </div>
      </div>
    </div>
  );
}
