import QuickPayPhoneInput from '../forms/QuickPayPhoneInput';

const QuickPay = () => {
  return (
    <>
      <div
        id="box"
        className="ease shadow-soft relative top-16 z-20 -mt-32 ml-auto w-full overflow-hidden rounded-2xl bg-white sm:-mt-0 lg:w-w-modal lg:rounded-3xl 2xl:h-modal-sm"
      >
        <div className="hide">
          <div className="lg:pt-8">
            <div className="max-w-md">
              <h2 className="px-8 pt-5 text-xl font-bold leading-tight text-black lg:mb-2 lg:py-0 lg:text-32xl 2xl:mb-5 2xl:leading-tight ">
                Easy, Smart Energy <br /> Pre-pay
              </h2>
            </div>
            <QuickPayPhoneInput />
          </div>
          <div className="relative top-1 flex h-16 w-full items-center justify-center bg-primary-light text-sm font-medium text-primary-dark lg:text-base">
            <span>Having trouble?</span>
            <a className="ml-2 font-semibold text-primary-base">Get help</a>
          </div>
        </div>
      </div>
    </>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
