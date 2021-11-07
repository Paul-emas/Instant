import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import gsap from 'gsap';

const ErrorAlert = ({ error, setError }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.alert',
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        ease: 'elastic',
      },
    );
  }, []);

  return (
    <div className="alert bg-red-200 capitalize flex items-center justify-center text-red-600 rounded-lg py-2.5 text-center px-4 text-sm mt-4 -mb-6">
      <span className="px-2">{error}</span>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="text-xl w-6 h-6 ml-auto cursor-pointer"
        onClick={() => setError(null)}
      />
    </div>
  );
};

export default ErrorAlert;
