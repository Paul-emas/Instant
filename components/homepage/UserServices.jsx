import PropTypes from 'prop-types';
import BulbIcon from '../../public/svgs/bulb-dashed-h.svg';
import MoneyIcon from '../../public/svgs/money.svg';
import GuardIcon from '../../public/svgs/guard.svg';

const UserServices = ({ title, stepArr }) => {
  return (
    <div className="py-10 lg:py-28 bg-white">
      <div className="container px-4 lg:px-10 mx-auto">
        <h1 className="text-xl lg:text-5xl font-bold md:max-w-xs lg:max-w-xl text-center mx-auto text-primary-dark">
          {title}
        </h1>
        <div className="md:flex justify-center mt-16 lg:mt-24 px-10 space-x-16 mx-auto">
          {stepArr.map(({ name, caption, icon }, index) => {
            const Icon = icon;
            return (
              <div
                key={index}
                className="lg:mx-0 mb-10 lg:mb-0 py-16 px-5 rounded-3xl border border-primary-light hover:bg-white shadow-soft-hover duration-200"
              >
                <Icon className="mx-auto hidden lg:block" />
                <div className="text-center mt-7">
                  <h2 className=" lg:text-2xl font-bold text-primary-dark">
                    {name}
                  </h2>
                  <p className="text-sm max-w-xs mx-auto px-5 mt-2">
                    {caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

UserServices.defaultProps = {
  title: 'Easy steps to recharge your meter',
  stepArr: [
    {
      name: 'Add your meter',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
    {
      name: 'Enter Amount',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: MoneyIcon,
    },
    {
      name: 'Buy Electricty',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: GuardIcon,
    },
  ],
};

UserServices.propTypes = {
  title: PropTypes.string,
  stepArr: PropTypes.array,
  border: PropTypes.bool,
};

export default UserServices;
