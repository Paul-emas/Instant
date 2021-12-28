import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';

const PageLoader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    tl.to('.logo', {
      ease: 'easeIn',
      rotate: 360,
      duration: 0.5,
    });
  });
  return (
    <div className="fixed w-full min-h-screen flex items-center justify-center bg-primary-light">
      <div className="relative">
        <div className="p-5 relative">
          <div className="logo w-full h-full border-t-4 absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-b-4 border-primary-base rounded-full"></div>
          <div className="rounded-full w-16 h-16 hidden lg:block relative overflow-hidden">
            <img
              src="/images/logo-circle.png"
              className="object-cover w-16 h-16"
            />
          </div>
          <div className="rounded-full w-14 h-14 lg:hidden block relative overflow-hidden">
            <Image
              src="/images/logo-circle.png"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
