import PropTypes from 'prop-types';
import BulbIcon from '../../public/svgs/bulb.svg';
import BulbIcon2 from '../../public/svgs/bulb-2.svg';

const UserServices = ({ title, stepArr, border }) => {
  return (
    <div className={`${border && 'border-t'} py-10 lg:py-20`}>
      <div className="container px-4 lg:px-10 mx-auto">
        <h1 className="text-xl lg:text-5xl font-bold md:max-w-xs lg:max-w-xl text-center mx-auto font-gill">
          {title}
        </h1>
        <div className="md:flex justify-center mt-16 lg:mt-24">
          {stepArr.map(({ name, caption, icon }, index) => {
            const Icon = icon;
            return (
              <div
                key={index}
                className="max-w-xs mx-auto lg:mx-0 mb-10 lg:mb-0"
              >
                <Icon
                  className="mx-auto hidden lg:block"
                  width="191.139"
                  height="141.593"
                  viewBox="0 0 191.139 141.593"
                />
                <BulbIcon2 className="mx-auto block lg:hidden" />
                <div className="text-center mt-7">
                  <h2 className="font-gill lg:text-xl font-semibold">{name}</h2>
                  <p className="text-sm px-5 mt-2">{caption}</p>
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
      icon: BulbIcon,
    },
    {
      name: 'Buy Electricty',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
  ],
};

UserServices.propTypes = {
  title: PropTypes.string,
  stepArr: PropTypes.array,
  border: PropTypes.bool,
};

export default UserServices;
