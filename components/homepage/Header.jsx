import Navbar from '../layout/Navbar';
import DownloadButtons from '../DownloadButtons';
import QuickPay from '../modals/QuickPay';
import ContactCard from '../ContactCard';

export default function Header() {
  return (
    <div>
      <Navbar />
      <header className="min-h-screen bg-primary-light overflow-x-hidden">
        <div className="xl:container mx-auto px-6 xl:px-10">
          <div className="flex w-full min-h-screen justify-between">
            <div className="relative w-1/2 pt-72">
              <div className="max-w-xl">
                <h1 className="text-5xl leading-tight text-font-darker">
                  Buy Electricity at affordable rates with Instant Energy
                </h1>
                <p className="text-font-dark text-xl leading-normal mt-6">
                  Instant Energy deploys patient, value accretive capital
                  alongside international and local value investors to create.
                </p>
                <DownloadButtons />
              </div>
              <ContactCard top />
            </div>
            <div className="w-1/2 pb-16 2xl:pb-10">
              <QuickPay />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
