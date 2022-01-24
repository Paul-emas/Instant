import Link from 'next/link';
import QuickPayPhoneInput from '../forms/QuickPayPhoneInput';

const QuickPay = () => {
  return (
    <>
      <div
        id="box"
        className="-mt-32 sm:-mt-0 2xl:h-modal-sm bg-white w-full overflow-hidden ease lg:w-w-modal top-16 ml-auto shadow-soft rounded-2xl relative lg:rounded-3xl z-20"
      >
        <div className="hide">
          <div className="lg:pt-8">
            <div className="max-w-md">
              <h2 className="text-xl lg:text-32xl pt-5 lg:py-0 px-8 lg:mb-2 2xl:mb-5 leading-tight 2xl:leading-tight text-black font-bold ">
                Easy, Smart Energy <br /> Pre-pay
              </h2>
            </div>
            <QuickPayPhoneInput />
          </div>
          <div className="w-full h-16 relative top-1 text-primary-dark text-sm lg:text-base font-medium flex justify-center items-center bg-primary-light">
            <span>Having trouble?</span>
            <Link href="/auth/sign-up">
              <a className="text-primary-base font-semibold ml-2">Get help</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
