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
      yoyo: true,
      y: -40,
      repeat: 1,
    });
  });
  return (
    <div className="fixed w-full min-h-screen flex items-center justify-center bg-primary-light">
      <div className="relative">
        <div className="rounded-full w-20 h-20 hidden lg:block relative overflow-hidden logo">
          <Image
            src="/images/logo-circle.png"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="rounded-full w-14 h-14 lg:hidden block relative overflow-hidden logo">
          <Image
            src="/images/logo-circle.png"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
