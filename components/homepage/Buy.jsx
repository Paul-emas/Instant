import Link from 'next/link';
import PrimaryButton from '../Buttons/PrimaryButton';

const Buy = () => {
  return (
    <div className="pb-14 sm:py-20 bg-secondary-lightGreen">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="md:max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:space-x-24">
            <div>
              <img
                src="/images/bulb.webp"
                alt="Instant energy bulb illustration"
                className="p-20 sm:p-10 -my-14 sm:-my-0"
              />
            </div>
            <div className="flex items-center text-center sm:text-left">
              <div>
                <div className="px-5 sm:px-0">
                  <div className="text-xl sm:text-5xl text-primary-darker font-bold">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitred
                  </div>
                  <p className="mt-5 text-sm sm:text-base text-gray-500">
                    At Instant Energy, we make Energy accessible and affordable
                    in emerging, underserved markets across Nigeria and Africa
                    by providing energy as a service platform and also
                    facilitating access to clean renewable energy for
                    residential and commercial clusters.
                  </p>
                </div>
                <div className="sm:w-56 mt-10 sm:mt-6">
                  <Link href="/sign-up">
                    <PrimaryButton>Get Started</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
