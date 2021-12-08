import { useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import gsap from 'gsap';

import SuccessIcon from '../../public/svgs/success.svg';
import ErrorIcon from '../../public/svgs/error.svg';

const ErrorSuccess = ({ paystack, error, next }) => {
  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo('.icon', { scale: 0.2 }, { scale: 1, ease: 'elastic' });
    if (!error) {
      setTimeout(() => {
        next();
      }, 4000);
    }
  }, [error]);
  return (
    <div className="px-8 -mt-6 text-center">
      <div className="icon flex justify-center">
        {!error ? <SuccessIcon /> : <ErrorIcon />}
      </div>
      <div className="pb-6">
        <div className="text-2xl mt-6 font-gill">
          <span>Transcation {!error ? 'Successful' : 'Failed'}</span>
        </div>
        <p className="text-sm text-gray-400 mt-1 max-w-xs mx-auto">
          {!error ? (
            <>
              Your transaction was successful. Kindly copy <br /> Token for
              reference.{' '}
              <span
                onClick={() => {
                  toast.success('Copied');
                  copy(paystack?.reference);
                }}
                className="font-semibold text-primary-base cursor-pointer"
              >
                {paystack?.reference}
              </span>
            </>
          ) : (
            error
          )}
        </p>
      </div>
    </div>
  );
};

export default ErrorSuccess;
