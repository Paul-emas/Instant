import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const router = useRouter();

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
        isScrolling ? 'border-b bg-white' : 'bg-primary-light'
      } h-16 fixed z-50 inset-0`}>
      <div className="xl:container mx-auto h-full px-6 lg:px-10">
        <div className="flex justify-between h-full items-center">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={185}
                height={40}
                className="object-contain"
              />
            </a>
          </Link>
          <div className="flex items-center text-base space-x-8">
            <Link href="/">
              <a className="text-primary-darker font-bold">Electricity Units</a>
            </Link>
            <Link href="/solar-plans">
              <a className="text-primary-darker font-bold">Solar Electricity</a>
            </Link>
            <Link href="/off-grid">
              <a className="text-primary-darker font-bold">Offgrid</a>
            </Link>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
