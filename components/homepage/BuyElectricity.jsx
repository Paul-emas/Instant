import ShockIcon from '../../public/svgs/shock.svg';
import ShockIcon2 from '../../public/svgs/shock-sm.svg';

const BuyElectricity = ({ title, caption, iconText, cta, bg, alignRight }) => {
  return (
    <div className={`${bg} py-16 lg:py-36`}>
      <div className="container px-4 lg:px-10 mx-auto">
        <div
          className={`${
            alignRight && 'flex-row-reverse'
          } lg:flex justify-center max-w-6xl 2xl:max-w-5xl mx-auto`}
        >
          <div className="lg:w-1/2">
            <ShockIcon
              className={`${
                alignRight && 'right-0 float-right'
              } hidden lg:block`}
            />
            <ShockIcon2 className="lg:hidden block mx-auto" />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left mt-5">
            <span className="px-3 py-1.5 bg-secondary-green  text-white uppercase hidden lg:inline text-xxs font-bold rounded-3xl">
              {iconText}
            </span>
            <h1 className="text-2xl lg:text-5xl font-bold max-w-xl mx-auto lg:mx-0 font-gill mt-4">
              {title}
            </h1>
            <p className="text-sm lg:text-base mt-7">{caption}</p>
            <div className="flex px-5 lg:px-0 lg:mt-5 max-w-sm lg:max-w-full mx-auto lg:mx-0">
              <div className="lg:w-52">
                <button
                  type="submit"
                  className="btn text-xs lg:text-base bg-primary-base btn-white transform uppercase"
                >
                  {cta}
                </button>
              </div>
              <div className="relative -left-3 lg:-left-0 mt-8">
                <button
                  type="submit"
                  className="px-10 text-xs lg:text-base font-semibold text-primary-darker text-left py-4 lg:py-5 w-full transform uppercase"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BuyElectricity.defaultProps = {
  title: 'Buy electricity units at affordable rates',
  caption:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
  iconText: 'UNITS PURCHASE',
  cta: 'Buy electricity',
  alignRight: false,
  bg: '',
};

export default BuyElectricity;
