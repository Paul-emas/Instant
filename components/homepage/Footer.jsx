import Image from 'next/image';
import Link from 'next/link';

import ContactCard from '../ContactCard';
import DownloadButtons from '../DownloadButtons';
import SocialCard from '../SocialCard';

const Footer = () => {
  return (
    <footer className="pt-8 lg:pt-24 bg-primary-darkest">
      <div className="container mx-auto px-0 lg:px-10">
        <div className="grid lg:grid-cols-6">
          <div className="col-span-2 text-center pb-5 lg:pb-0 lg:text-left px-4 lg:px-0 border-b border-secondary-lightGreen lg:border-none">
            <Image
              src="/images/logo-light.png"
              width={185}
              height={40}
              className="object-contain"
            />
            <p className="mt-2 lg:mt-5 text-xs lg:text-sm mx-auto px-10 lg:px-0 lg:mx-0 lg:max-w-xs lg:pr-20 text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diamr.
            </p>
            <div className="hidden lg:block lg:mt-10">
              <ContactCard light />
            </div>
          </div>
          <div className="col-span-2 block lg:hidden text-center px-4 lg:px-0">
            <div className="">
              <SocialCard follow={false} center />
            </div>
            <p className="mt-5 text-xs lg:text-sm max-w-xs px-16 mx-auto text-gray-400">
              Suite 409, Nawa Complex Jahi, Abuja. Nigeria
            </p>
            <p className="text-white  font-semibold mt-2">
              Info@instantenergy.com
            </p>
            <p className="text-white  font-semibold mt-2">080-1234-5678</p>
          </div>
          <div className="col-span-2 px-4 lg:px-0">
            <div className="flex flex-wrap mt-10 lg:mt-0 px-5 lg:px-0 justify-between">
              <div className="w-1/2 lg:w-auto">
                <h2 className="text-white  font-semibold">Products</h2>
                <div className="flex flex-col space-y-4 lg:space-y-8 mt-5 lg:mt-10">
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Buy Electricity
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Become an Agent
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Available Cities
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/2 lg:w-auto">
                <h2 className="text-white  font-semibold">Company</h2>
                <div className="flex flex-col space-y-4 lg:space-y-8 mt-5 lg:mt-10">
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Home
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      About us
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Contact us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-span-3 w-full lg:w-auto mt-5 lg:mt-0">
                <h2 className="text-white  font-semibold">Legal</h2>
                <div className="flex flex-col space-y-4 lg:space-y-8 mt-5 lg:mt-10">
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Privacy Policy
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      Terms of use
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-xs lg:text-sm hover:text-primary-base text-gray-400 font-semibold">
                      FAQs
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden lg:block text-right px-4 lg:px-0">
            <div className="-mr-4">
              <SocialCard follow={false} center={false} />
            </div>
            <p className="mt-5 text-xs lg:text-sm max-w-xs pl-24 ml-auto text-gray-400">
              Suite 409, Nawa Complex Jahi, Abuja. Nigeria
            </p>
            <p className="text-white  font-semibold mt-2">
              Info@instantenergy.com
            </p>
            <p className="text-white  font-semibold mt-2">080-1234-5678</p>
          </div>
        </div>
        <div className="w-full justify-center mt-10 px-5 lg:px-0 lg:mt-32">
          <h2 className="text-white  font-semibold mt-2 -mb-2 text-center">
            Download our mobile app
          </h2>
          <DownloadButtons
            center
            captionColor="text-gray-400"
            className="border-2 border-gray-400 hover:bg-primary-dark hover:border-primary-dark"
          />
        </div>
      </div>
      <div className="py-6 lg:py-12 border-t border-secondary-lightGreen mt-10">
        <p className="text-gray-400 text-xs lg:text-base text-center">
          © 2021. Instant Energy All Rights Reserved{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
