import ShockIcon from '../../public/svgs/shock.svg';

const BuyElectricity = ({ title, caption, iconText, cta, alignRight }) => {
  return (
    <div className={`${!alignRight && 'bg-secondary-lightGreen'} py-36`}>
      <div className="container px-10 mx-auto">
        <div
          className={`${
            alignRight && 'flex-row-reverse'
          } flex justify-center max-w-6xl 2xl:max-w-5xl mx-auto`}>
          <div className="w-1/2">
            <ShockIcon className={`${alignRight && 'right-0 float-right'}`} />
          </div>
          <div className="w-1/2">
            <span className="px-3 py-1.5 bg-secondary-green text-white uppercase text-xxs font-bold rounded-3xl">
              {iconText}
            </span>
            <h1 className="text-5xl font-bold max-w-xl font-gill">{title}</h1>
            <p className="mt-7">{caption}</p>
            <div className="flex mt-5">
              <div className="w-52">
                <button type="submit" className="btn transform uppercase">
                  {cta}
                </button>
              </div>
              <div className=" mt-8">
                <button
                  type="submit"
                  className="px-10 font-semibold text-primary-darker text-left py-5 w-full transform uppercase">
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
};

export default BuyElectricity;
