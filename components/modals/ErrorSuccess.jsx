import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

import SuccessIcon from '../../public/svgs/success.svg';
import ErrorIcon from '../../public/svgs/error.svg';
import Button from '../Button';

const ErrorSuccess = ({ msg, error, next }) => {
  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo('.icon', { scale: 0.2 }, { scale: 1, ease: 'elastic' });
  }, [error]);

  return (
    <div className="bg-white text-center">
      <div className="icon flex justify-center">{!error ? <SuccessIcon /> : <ErrorIcon />}</div>
      <div className="pb-6">
        <div className="mt-6 text-2xl font-bold">
          <span>{!error ? 'Transaction Successful' : 'Oops!'}</span>
        </div>
        <p className="mx-auto mt-1 max-w-xs text-sm text-gray-400">
          {!error ? <span>{msg}</span> : <span>{error}</span>}
        </p>
        {error && (
          <Button onClick={next} className="mt-6">
            Retry Transaction
          </Button>
        )}
      </div>
      {error && (
        <div className="mt-6">
          <p className="text-sm">
            <span>Still having problems?</span>
            <Link href="/contact">
              <button className="ml-1 font-semibold text-primary-base">Contact us</button>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorSuccess;
