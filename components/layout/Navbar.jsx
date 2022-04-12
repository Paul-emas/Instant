import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';
import { setInitAuthentication } from '../../slices/user';

import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isScrolling, setIsScrolling] = useState(false);
  const { isLoggedIn } = useSelector(persistSelector);

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
        isScrolling ? 'h-14 border-b bg-white lg:h-16' : 'h-16 bg-primary-light lg:h-24'
      }  fixed inset-0 z-40 transition-all`}
    >
      <div
        className={`${
          isScrolling ? 'h-0 py-0 opacity-0' : 'opacity-1'
        } flex w-full items-center justify-center bg-green-400  py-2 px-4 text-center text-xs font-semibold duration-300 lg:text-sm`}
      >
        <span className="hidden text-2xl lg:block">👋🏿</span>
        <span className="ml-2">Welcome to the new Instant Energy website. {`We're`} now open for business</span>
      </div>
      <div
        className={`${
          isScrolling ? 'h-14 border-b bg-white lg:h-16' : 'h-16 bg-primary-light lg:h-16'
        }  inset-0 z-40 transition-all`}
      >
        <div className="mx-auto h-full px-4 lg:px-14 xl:container">
          <div className="flex h-full items-center justify-between">
            <div className="-ml-3 mt-1 hidden lg:block">
              <Link href="/">
                <a>
                  <Image src="/images/logo.webp" width={200} height={46} objectFit="contain" priority={true} />
                </a>
              </Link>
            </div>
            <div className="mt-1 block lg:hidden">
              <Link href="/">
                <a>
                  <Image src="/images/logo.webp" width={140.13} height={40.23} objectFit="contain" priority={true} />
                </a>
              </Link>
            </div>
            <div className="grid items-center space-x-2 text-base lg:flex lg:grid-cols-2 lg:space-x-8">
              {/* <Link href="/">
              <a className="hidden font-semibold text-primary-darker lg:block">
                Electricity Units
              </a>
            </Link>
            */}

              <Link href="/">
                <a className="hidden font-semibold text-primary-darker hover:text-primary-base lg:block">Home</a>
              </Link>

              <Link href="/about">
                <a className="hidden font-semibold text-primary-darker hover:text-primary-base lg:block">About us</a>
              </Link>

              <Link href="/contact">
                <a className="hidden font-semibold text-primary-darker hover:text-primary-base lg:block">Contact us</a>
              </Link>

              {isLoggedIn ? (
                <Link href="/dashboard">
                  <Button>My Dashboard</Button>
                </Link>
              ) : (
                <Button onClick={() => dispatch(setInitAuthentication('login'))}>Get started</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
