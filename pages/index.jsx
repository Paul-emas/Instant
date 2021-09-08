import DownloadButtons from '../components/DownloadButtons';
import { Navbar } from '../components/layout/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="min-h-screen bg-primary-light relative top-20 outline-black">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-2 outline-black">
            <div className="relative pt-56">
              <div className="max-w-xl outline-black">
                <h1 className="text-5xl leading-tight text-font-darker">
                  Buy Electricity at affordable rates with Instant Energy
                </h1>
                <p className="text-font-dark text-xl leading-normal mt-6">
                  Instant Energy deploys patient, value accretive capital
                  alongside international and local value investors to create.
                </p>
                <DownloadButtons />
              </div>
            </div>
            <div className="">Hello</div>
          </div>
        </div>
      </header>
    </div>
  );
}
