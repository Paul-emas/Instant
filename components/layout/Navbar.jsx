import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';

const Navbar = () => {
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
        isScrolling ? 'shadow-lg bg-white' : 'bg-primary-light'
      } h-16 fixed z-50 inset-0`}>
      <div className="xl:container mx-auto h-full px-6 lg:px-10">
        <div className="flex justify-between h-full items-center">
          <Image
            src="/images/logo.png"
            width={181.42}
            height={30.95}
            className="object-contain"
          />
          <div className="flex items-center text-base space-x-12">
            <Link href="/">
              <a>Available cities</a>
            </Link>
            <Link href="/">
              <a>Become an Agent</a>
            </Link>
            <Link href="/">
              <a>Login</a>
            </Link>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
