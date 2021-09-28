import PropTypes from 'prop-types';
import BulbIcon from '../../public/svgs/bulb.svg';

const UserServices = ({ title, stepArr, border }) => {
  return (
    <div className={`${border && 'border-t'} py-20`}>
      <div className="container px-10 mx-auto">
        <h1 className="text-5xl font-bold max-w-xl text-center mx-auto font-gill">
          {title}
        </h1>
        <div className="flex justify-center mt-24">
          {stepArr.map(({ name, caption, icon }, index) => {
            const Icon = icon;
            return (
              <div key={index} className="max-w-xs">
                <Icon className="mx-auto" />
                <div className="text-center mt-7">
                  <h2 className="font-gill text-xl font-semibold">{name}</h2>
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
      name: 'Add your meter',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
    {
      name: 'Add your meter',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
  ],
};

UserServices.propTypes = {
  title: PropTypes.string,
  stepArr: PropTypes.array,
  border: PropTypes.string,
};

export default UserServices;
