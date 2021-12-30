import { useEffect } from 'react';
import gsap, { Linear } from 'gsap';

const PageLoader = () => {
  useEffect(() => {
    gsap.to('.logo', {
      ease: Linear.easeNone,
      rotation: 360,
      duration: 1,
      repeat: -1,
    });
  }, []);

  return (
    <div className="fixed w-full min-h-screen flex items-center justify-center bg-white">
      <div className="relative">
        <div className="p-7 relative">
          <div className="logo w-full h-full border-t-4 absolute transform border-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-b-4 border-primary-light border-t-primary-base border-b-primary-base rounded-full"></div>
          <div className="rounded-full w-16 h-16 hidden lg:block relative overflow-hidden">
            <img
              src="/images/logo-circle.png"
              className="object-cover w-16 h-16"
            />
          </div>
          <div className="rounded-full w-14 h-14 lg:hidden block relative overflow-hidden">
            <img
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
