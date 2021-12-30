import { useEffect } from 'react';
import gsap, { Linear } from 'gsap';

const RequestLoader = ({ type }) => {
  useEffect(() => {
    gsap.to('.logo', {
      ease: Linear.easeNone,
      rotation: 360,
      duration: 1,
      repeat: -1,
    });
  }, []);

  return (
    <div className="flex items-center flex-col bg-white w-full sm:w-auto mx-4 sm:mx-0 sm:px-20 py-20 rounded-2xl text-center">
      <div className="p-7 relative">
        <div className="logo w-full h-full border-t-4 absolute transform border-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-b-4 border-primary-light border-t-primary-base border-b-primary-base rounded-full"></div>
        <div className="rounded-full w-16 h-16 relative overflow-hidden">
          <img
            src="/images/logo-circle.png"
            className="object-cover w-16 h-16"
          />
        </div>
      </div>
      <div className="mt-5 text-xl text-primary-dark font-bold">
        Your request is processing
      </div>
      <p className="text-sm text-gray-400 max-w-xs">
        Just hold a seconds, we are processing <br /> your {type}
      </p>
    </div>
  );
};

export default RequestLoader;
