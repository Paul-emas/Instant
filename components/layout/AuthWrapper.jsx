import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cookie from 'js-cookie';

import DownloadButtons from '../DownloadButtons';
import ContactCard from '../ContactCard';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AuthWrapper = ({ title, caption, icon, children }) => {
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
        scale: 0.8,
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
        <div className="bg-primary-darker hidden lg:block justify-center lg:h-screen overlay">
          <div className="max-w-md mx-auto py-3 2xl:py-20">
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
            <div className="fade">{icon()}</div>
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
        <div className="bg-white relative lg:py-10 xl:h-screen justify-center lg:overflow-y-auto">
          <button
            onClick={goBack}
            className="py-2.5 rounded-lg w-28 justify-center text-sm font-semibold bg-primary-light hover:opacity-80 flex relative items-center -top-20 -mt-2.5 lg:top-10 lg:mt-0 left-10 2xl:left-20"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 mr-2" />
            <span className="mt-0.5">Go back</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
