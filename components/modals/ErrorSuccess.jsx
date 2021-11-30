import SuccessIcon from '../../public/svgs/success.svg';
import ErrorIcon from '../../public/svgs/error.svg';

const ErrorSuccess = ({ error }) => {
  return (
    <div className="px-8 -mt-6 text-center">
      <div className="flex justify-center">
        {!error ? <SuccessIcon /> : <ErrorIcon />}
      </div>
      <div className="pb-6">
        <div className="text-2xl mt-6 font-gill">
          <span>Transcation {!error ? 'Successful' : 'Failed'}</span>
        </div>
        <p className="text-sm text-gray-400">
          Your transaction was successful. Kindly copy Token for reference. GTRE
          2345 6789 2345 6789
        </p>
      </div>
    </div>
  );
};

export default ErrorSuccess;
