import Navbar from '../layout/Navbar';
import DownloadButtons from '../DownloadButtons';
import QuickPay from '../modals/QuickPay';
import ContactCard from '../ContactCard';

const Header = () => (
  <div>
    <Navbar />
    <header className="min-h-screen bg-primary-light overflow-x-hidden">
      <div className="xl:container mx-auto px-6 xl:px-10">
        <div className="flex w-full min-h-screen justify-between">
          <div className="relative w-1/2 pt-52 2xl:pt-72">
            <div className="max-w-xl">
              <h1 className="text-6xl leading-tight font-extrabold text-font-darker font-gill">
                Buy Electricity at affordable rates
              </h1>
              <p className="text-font-dark text-xl leading-normal mt-6">
                Instant Energy deploys patient, value accretive capital
                alongside international and local value investors to create.
              </p>
              <DownloadButtons className="bg-primary-darker hover:bg-primary-darkest" />
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

export default Header;
