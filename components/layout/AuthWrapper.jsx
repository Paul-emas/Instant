import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cookie from 'js-cookie';

import ContactCard from '../ContactCard';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AuthWrapper = ({ title, caption, banner, children }) => {
  const token = cookie.get('token');
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace('/dashboard');
    }
  }, [token]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.fadeIn',
      },
    });
    tl.fromTo(
      '.fade',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
    );
    tl.from(
      '.fadeIn',
      {
        scale: 1.2,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
      },
    );
    tl.duration(0.4).play();
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="py-8 lg:py-0 w-full lg:h-screen overflow-hidden">
      <div className="flex lg:hidden justify-center mb-10 lg:mb-0">
        <Link href="/">
          <a>
            <Image
              src="/images/logo.webp"
              width={185}
              height={40}
              className="object-contain mx-auto"
            />
          </a>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2">
        <div
          className={`${banner} relative hidden bg-primary-darker lg:block justify-center lg:h-screen bg-cover bg-center bg-no-repeat`}
        >
          <div className="w-full h-full absolute bg-primary-darker bg-opacity-70 inset-0 z-10"></div>
          <div className="max-w-md ml-28 py-3 2xl:py-20 absolute z-20">
            <div className="hidden 2xl:flex">
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
            <div className="mt-10 flex 2xl:hidden">
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
            <div className="pt-40 2xl:pt-52">
              <h1 className="text-4xl 2xl:text-4.5xl  font-bold leading-tight text-white">
                {title}
              </h1>
              <p className="text-gray-400 leading-tight 2xl:text-lg mt-5">
                {caption}
              </p>
              <div className="relative top-48">
                <ContactCard light />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative lg:py-10 xl:h-screen justify-center lg:overflow-y-auto">
          <button
            onClick={goBack}
            className="py-2.5 rounded-lg w-28 justify-center text-sm font-semibold bg-primary-light hover:opacity-80 hidden sm:flex relative items-center -top-20 mb-20 -mt-2.5 lg:-top-2 lg:mt-0 float-right right-32 z-10"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3 mr-2" />
            <span className="mt-0.5">Go back</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
