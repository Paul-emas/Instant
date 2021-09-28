import Image from 'next/image';
import Link from 'next/link';
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactCard from '../ContactCard';
import DownloadButtons from '../DownloadButtons';

const Footer = () => {
  return (
    <footer className="pt-24 bg-primary-darkest">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <Image
              src="/images/logo-light.png"
              width={185}
              height={40}
              className="object-contain"
            />
            <p className="mt-5 text-sm max-w-xs pr-20 text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diamr.
            </p>
            <div className="mt-10">
              <ContactCard light />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between">
              <div>
                <h2 className="text-white font-gill font-semibold">Products</h2>
                <div className="flex flex-col space-y-8 mt-10">
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      Buy Electricity
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      Become an Agent
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      Available Cities
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-white font-gill font-semibold">Company</h2>
                <div className="flex flex-col space-y-8 mt-10">
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">Home</a>
                  </Link>
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      About us
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      Contact us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-span-3">
                <h2 className="text-white font-gill font-semibold">Legal</h2>
                <div className="flex flex-col space-y-8 mt-10">
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      Privacy Policy
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">
                      Terms of use
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-sm text-gray-400 font-semibold">FAQs</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-right">
            <div className="flex justify-end space-x-5 ml-auto">
              <a
                href=""
                className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-twitter rounded-full">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-xl text-white mt-1.5 lg:mt-2.5"
                />
              </a>
              <a
                href=""
                className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-white border rounded-full">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl mt-1.5 lg:mt-2"
                />
              </a>
              <a
                href=""
                className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-linkedin rounded-full">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-xl text-white mt-1.5 lg:mt-2.5"
                />
              </a>
              <a
                href=""
                className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-youtube rounded-full">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-xl text-white mt-1.5 lg:mt-2.5"
                />
              </a>
            </div>
            <p className="mt-5 text-sm max-w-xs pl-24 ml-auto text-gray-400">
              Suite 409, Nawa Complex Jahi, Abuja. Nigeria
            </p>
            <p className="text-white font-gill font-semibold mt-2">
              Info@instantenergy.com
            </p>
            <p className="text-white font-gill font-semibold mt-2">
              080-1234-5678
            </p>
          </div>
        </div>
        <div className="w-full justify-center mt-32">
          <h2 className="text-white font-gill font-semibold mt-2 -mb-2 text-center">
            Download our mobile app
          </h2>
          <DownloadButtons
            center
            captionColor="text-gray-400"
            className="border-2 border-gray-400 hover:bg-primary-dark hover:border-primary-dark"
          />
        </div>
      </div>
      <div className="py-12 border-t border-secondary-lightGreen mt-10">
        <p className="text-gray-400 text-center">
          © 2021. Instant Energy All Rights Reserved{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
