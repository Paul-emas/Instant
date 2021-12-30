import Link from 'next/link';
import QuickPayPhoneInput from '../forms/QuickPayPhoneInput';

const QuickPay = () => {
  return (
    <>
      <div
        id="box"
        className="2xl:h-modal-sm lg:top-56 2xl:top-72 bg-white w-full overflow-hidden ease lg:w-w-modal 2xl:w-9/12 ml-auto shadow-soft rounded-2xl relative lg:rounded-3xl z-20"
      >
        <div className="hide">
          <div className="lg:pt-8">
            <div className="max-w-md">
              <h2 className="text-xl lg:text-32xl py-5 lg:py-0 px-8 lg:mb-2 2xl:mb-5 leading-tight 2xl:leading-tight text-black font-bold ">
                Easy, Smart Energy <br /> Pre-pay
              </h2>
            </div>
            <QuickPayPhoneInput />
          </div>
          <div className="w-full h-14 text-primary-dark font-medium flex justify-center items-center bg-primary-light">
            <span>Dont have an account?</span>
            <Link href="/auth/sign-up">
              <a className="text-primary-base ml-2">Sign up</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
