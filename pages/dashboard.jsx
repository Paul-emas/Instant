import Button from '../components/Button';
import Detailbar from '../components/layout/Detailbar';
import Sidebar from '../components/layout/Sidebar';

export default function Dashboard() {
  return (
    <div className="fixed min-h-screen w-full bg-gray-300">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex min-h-full flex-grow col-span-4 bg-primary-light">
          <div className="container px-5 2xl:px-7 pt-5 2xl:pt-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-heading font-extrabold">Buy Electricity</h1>
                <p className="text-md font-medium text-font-muted">
                  Never have interrupted power supply, making life easy.
                </p>
              </div>
              <Button>Buy Electricity</Button>
            </div>
          </div>
        </div>
        <Detailbar />
      </div>
    </div>
  );
}
