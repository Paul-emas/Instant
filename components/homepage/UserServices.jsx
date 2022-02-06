import PropTypes from 'prop-types';
import BulbIcon from '../../public/svgs/bulb-dashed-h.svg';
import MoneyIcon from '../../public/svgs/money.svg';
import GuardIcon from '../../public/svgs/guard.svg';

const UserServices = ({ title, stepArr }) => {
  return (
    <div className="bg-white py-10 lg:py-28">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <h1 className="mx-auto max-w-xs px-10 text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-xl lg:text-5xl">
          {title}
        </h1>
        <div className="mx-auto mt-16 justify-center sm:space-x-16 sm:px-10 md:flex lg:mt-24">
          {stepArr.map(({ name, caption, icon }, index) => {
            const Icon = icon;
            return (
              <div
                key={index}
                className="shadow-soft-hover mb-10 rounded-3xl border border-primary-light py-10 px-5 duration-200 hover:bg-white sm:py-16 lg:mx-0 lg:mb-0"
              >
                <Icon className="mx-auto block" />
                <div className="mt-7 text-center">
                  <h2 className=" font-bold text-primary-dark lg:text-2xl">{name}</h2>
                  <p className="mx-auto mt-2 px-5 text-sm sm:max-w-xs">{caption}</p>
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
      caption: 'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
    {
      name: 'Enter Amount',
      caption: 'Tell us what you like to send and let us know when we can come.',
      icon: MoneyIcon,
    },
    {
      name: 'Buy Electricty',
      caption: 'Tell us what you like to send and let us know when we can come.',
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
