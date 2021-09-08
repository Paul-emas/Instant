import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';

export const Navbar = () => {
  return (
    <div className="bg-primary-light h-20 fixed inset-0">
      <div className="container mx-auto h-full px-6 lg:px-10">
        <div className="flex justify-between h-full outline-black items-center">
          <Image
            src="/images/logo.png"
            width={181.42}
            height={34.95}
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
    </div>
  );
};
