import Link from 'next/link';
import PrimaryButton from '../Buttons/PrimaryButton';

const Buy = () => {
  return (
    <div className="py-20 bg-secondary-lightGreen">
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 space-x-24">
            <div>
              <img
                src="/images/bulb.webp"
                alt="Instant energy bulb illustration"
                className="p-10"
              />
            </div>
            <div className="flex items-center">
              <div>
                <div className="text-5xl text-primary-darker font-bold">
                  Buy electricity units at affordable rates
                </div>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren.
                </p>
                <div className="w-56 mt-5">
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
