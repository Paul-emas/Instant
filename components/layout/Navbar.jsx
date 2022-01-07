import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setInitAuthentication } from '../../slices/user';

import Button from '../Button';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
  }, [isScrolling]);

  return (
    <nav
      className={`${
        isScrolling
          ? 'border-b bg-white h-14 lg:h-16'
          : 'bg-primary-light h-16 lg:h-16'
      }  fixed transition-all z-40 inset-0`}
    >
      <div className="xl:container mx-auto h-full px-4 lg:px-10">
        <div className="flex justify-between h-full items-center">
          <div className="hidden lg:block -ml-5">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.webp"
                  width={185}
                  height={40}
                  className="object-contain"
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className="block lg:hidden mt-1">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.webp"
                  width={140.13}
                  height={40.23}
                  className="object-contain"
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:flex items-center text-base space-x-2 lg:space-x-8">
            <Link href="/">
              <a className="hidden lg:block text-primary-darker font-semibold">
                Electricity Units
              </a>
            </Link>
            <Link href="/solar-plans">
              <a className="text-primary-darker text-xs lg:text-base font-semibold">
                Solar Electricity
              </a>
            </Link>
            <Link href="/offgrid">
              <a className="hidden lg:block text-primary-darker font-semibold">
                Offgrid
              </a>
            </Link>
            <Button onClick={() => dispatch(setInitAuthentication(true))}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
