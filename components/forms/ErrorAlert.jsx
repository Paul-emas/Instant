import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import gsap from 'gsap';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ErrorAlert = ({ error, setError }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.alert',
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power3',
      },
    );
  }, []);

  return (
    <div className="mt-10 px-6 lg:px-8 sm:pb-3 border-t">
      <div className="alert bg-red-50 capitalize text-red-600 font-semibold rounded-lg py-2.5 px-3 text-xs mt-4 -mb-6">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="w-3 h-3 text-red-600"
          />
          <span className="ml-1.5">{error}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
