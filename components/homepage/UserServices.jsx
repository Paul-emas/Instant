import PropTypes from 'prop-types';
import PlusIcon from '../../public/svgs/plus.svg';

const UserServices = ({ title, stepArr }) => {
  return (
    <div className="z-30 bg-white lg:pb-10">
      <div className="container relative mx-auto px-4 sm:px-5 xl:container xl:px-14">
        <div className="shadow-soft relative -top-16 mx-auto rounded-2xl bg-white px-4 py-5 sm:px-5 lg:-top-24 lg:py-14 xl:px-14">
          <div className="mx-auto grid lg:grid-cols-3">
            {stepArr.map(({ name, caption, icon }, index) => {
              const Icon = icon;
              return (
                <div
                  key={index}
                  className="flex items-center border-b py-7 pl-5 duration-200 last:border-none hover:bg-white lg:mx-0 lg:mb-10 lg:border-r lg:py-0 lg:pl-10"
                >
                  <div>
                    <Icon />
                  </div>
                  <div className="ml-6">
                    <div className="text-xs font-bold uppercase text-gray-400">
                      Step {index + 1}
                    </div>
                    <h2 className="mt-1 font-bold text-black">{name}</h2>
                    <p className="mt-0.5 text-sm text-gray-400 sm:max-w-xs">{caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

UserServices.defaultProps = {
  title: 'Recharge your meter with 3 easy steps',
  stepArr: [
    {
      name: 'Add your meter',
      caption: 'Start by selecting your state and entering your meter number.',
      icon: PlusIcon,
    },
    {
      name: 'Enter Amount',
      caption: 'Enter the amount you want to purchase',
      icon: PlusIcon,
    },
    {
      name: 'Make Payment',
      caption: 'Upon checkout select your preferred payment option including IE Pay wallet.',
      icon: PlusIcon,
    },
  ],
};

UserServices.propTypes = {
  title: PropTypes.string,
  stepArr: PropTypes.array,
  border: PropTypes.bool,
};

export default UserServices;
