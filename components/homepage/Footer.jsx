import Image from 'next/image';
import Link from 'next/link';

import ContactCard from '../ContactCard';
import DownloadButtons from '../DownloadButtons';
import SocialCard from '../SocialCard';

const Footer = () => {
  return (
    <footer className="bg-primary-lightGray pt-8 lg:pt-24">
      <div className="container mx-auto px-0 lg:px-14">
        <div className="grid lg:grid-cols-6">
          <div className="col-span-2 border-b border-secondary-lightGreen px-4 pb-5 text-center lg:border-none lg:px-0 lg:pb-0 lg:text-left">
            <Image src="/images/logo.webp" width={185} height={40} className="object-contain" />
            <p className="mx-auto mt-2 px-10 text-xs lg:mx-0 lg:mt-5 lg:max-w-xs lg:px-0 lg:pr-20 lg:text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut.
            </p>
            <div className="hidden lg:mt-10 lg:block">
              <ContactCard light />
            </div>
          </div>
          <div className="col-span-2 block px-4 text-center lg:hidden lg:px-0">
            <div className="">
              <SocialCard follow={false} center />
            </div>
            <p className="mx-auto mt-5 max-w-xs px-16 text-xs text-gray-400 lg:text-sm">
              Suite 409, Nawa Complex Jahi, Abuja. Nigeria
            </p>
            <p className="mt-2 font-semibold">Info@instantenergy.com</p>
            <p className="mt-2 font-semibold">080-1234-5678</p>
          </div>
          <div className="col-span-2 px-4 lg:px-0">
            <div className="mt-10 flex flex-wrap justify-between px-5 lg:mt-0 lg:px-0">
              <div className="w-1/2 lg:w-auto">
                <h2 className="font-semibold">Products</h2>
                <div className="mt-5 flex flex-col space-y-4 lg:mt-10 lg:space-y-8">
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Buy Electricity</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Become an Agent</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Available Cities</a>
                  </Link>
                </div>
              </div>
              <div className="w-1/2 lg:w-auto">
                <h2 className="font-semibold">Company</h2>
                <div className="mt-5 flex flex-col space-y-4 lg:mt-10 lg:space-y-8">
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Home</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">About us</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Contact us</a>
                  </Link>
                </div>
              </div>
              <div className="col-span-3 mt-5 w-full lg:mt-0 lg:w-auto">
                <h2 className="font-semibold">Legal</h2>
                <div className="mt-5 flex flex-col space-y-4 lg:mt-10 lg:space-y-8">
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Privacy Policy</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">Terms of use</a>
                  </Link>
                  <Link href="">
                    <a className="text-xs font-semibold lg:text-sm">FAQs</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden px-4 text-right lg:block lg:px-0">
            <SocialCard follow={false} center={false} />
            <p className="mt-5 ml-auto max-w-xs pl-24 text-xs lg:text-sm">
              Suite 409, Nawa Complex Jahi, Abuja. Nigeria.
            </p>
            <p className="mt-5 ml-auto max-w-xs pl-24 text-xs lg:text-sm">
              Rigakade 10 1013 BC Amsterdam, Netherlands.
            </p>
            <p className="mt-2 font-bold">Info@instantenergy.com</p>
            <p className="mt-1 font-bold">080-1234-5678</p>
          </div>
        </div>
        <div className="mt-10 w-full justify-center px-5 lg:mt-32 lg:px-0">
          <h2 className="mt-2 -mb-2 text-center font-semibold">Download our mobile app</h2>
          <DownloadButtons
            dark
            center
            labelColor="text-black"
            captionColor="text-gray-500"
            className="shadow-soft border-2 border-gray-700 bg-white"
          />
        </div>
      </div>
      <div className="mt-10 border-t py-6 lg:py-8">
        <p className="text-center text-xs text-gray-600 lg:text-base">
          © 2021. Instant Energy All Rights Reserved{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
