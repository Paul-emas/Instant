import { ErrorMessage as HErrorMessage } from '@hookform/error-message';

const ErrorMessage = props => {
  return (
    <HErrorMessage
      {...props}
      render={({ message }) => (
        <div className="mt-2 text-sm font-bold capitalize text-red-500">
          {message}
        </div>
      )}
    />
  );
};

export default ErrorMessage;
