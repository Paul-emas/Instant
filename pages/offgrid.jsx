import Business from '../components/homepage/Business';
import Control from '../components/homepage/Control';
import Header from '../components/homepage/Header';
import Solution from '../components/homepage/Solution';
import People from '../components/homepage/People';
import Slider from '../components/homepage/Slider';
import CTA from '../components/homepage/CTA';
import Footer from '../components/homepage/Footer';

export default function offGrid() {
  return (
    <div>
      <Header bg>
        <div className="relative w-1/2 pt-52 2xl:pt-72">
          <div className="max-w-xl">
            <h1 className="text-6xl leading-tight font-extrabold text-white ">
              Smart energy management with offgrid
            </h1>
            <p className="text-white text-xl leading-normal mt-6">
              Instant Energy deploys patient, value accretive capital alongside
              international and local value investors to create.
            </p>
            <div className="px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm lg:max-w-md mt-8 lg:mt-10">
              <a
                href="/"
                className="py-5 rounded-xl uppercase bg-primary-base border-2  border-primary-base text-white text-center text-sm font-bold"
              >
                Request Demo
              </a>
              <a
                href="/"
                className="py-5 rounded-xl uppercase border-2 border-white bg-transparent text-white text-center text-sm font-bold"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </Header>
      <Solution />
      <Business />
      <Control />
      <People />
      <Slider />
      <CTA />
      <Footer />
    </div>
  );
}
