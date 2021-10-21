import { useEffect } from 'react';
import router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cookie from 'js-cookie';

import DownloadButtons from '../DownloadButtons';
import ContactCard from '../ContactCard';

const AuthWrapper = ({ title, caption, icon, children }) => {
  const token = cookie.get('token');

  useEffect(() => {
    if (token) {
      router.replace('/dashboard');
    }
  }, [token]);

  return (
    <div className="py-8 lg:py-0 w-full h-screen overflow-hidden">
      <div className="flex lg:hidden justify-center mb-10 lg:mb-0">
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              width={185}
              height={40}
              className="object-contain mx-auto"
            />
          </a>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="bg-primary-darker hidden lg:block justify-center h-screen">
          <div className="max-w-md mx-auto 2xl:py-16">
            <div className="justify-center hidden 2xl:flex">
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo-light.png"
                    width={247}
                    height={54}
                    className="object-contain mx-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="justify-center mt-10 flex 2xl:hidden">
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo-light.png"
                    width={185}
                    height={40}
                    className="object-contain mx-auto"
                  />
                </a>
              </Link>
            </div>
            {icon()}
            <div className="mt-5">
              <h1 className="text-3xl 2xl:text-4xl font-gill font-bold text-center text-white">
                {title}
              </h1>
              <p className="text-gray-400 text-center 2xl:text-lg mt-5">
                {caption}
              </p>
              <DownloadButtons
                center
                captionColor="text-gray-400"
                className="border-2 border-gray-400 hover:bg-primary-dark hover:border-primary-dark"
              />
              <div className="mt-20 2xl:mt-24 flex justify-center">
                <ContactCard light iconLight />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex lg:items-center justify-center xl:py-10 2xl:py-0 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
