import { forwardRef } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/react-hook-form';

const FormInput = forwardRef(
  (
    { as, type, label, control, options, children, className, ...props },
    ref,
  ) => {
    const As = as;

    return (
      <div className={`${className} mb-4`}>
        <label className="text-gray-400 font-semibold text-sm">{label}</label>
        {type !== 'phone' && type !== 'select' && type !== 'currency' && (
          <As
            name={label}
            autoComplete="off"
            ref={ref}
            type={type}
            className={`${
              type === 'textarea' ? 'pb-20 block' : ''
            } form-input focus:border-skin-theme focus:outline-none focus:border-gray-400`}
            {...props}
          />
        )}

        {type === 'phone' && (
          <div className="form-input focus:outline-none">
            <PhoneInput
              defaultCountry="NG"
              name={label}
              control={control}
              rules={{ required: true }}
              {...props}
            />
          </div>
        )}

        {type === 'select' && (
          <select
            {...props}
            className="form-select form-input focus:border-gray-400 focus:outline-none"
            placeholder="Regular input">
            {options.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
        )}

        {type === 'currency' && (
          <div className="form-input flex">
            <div className="text capitalize text-primary-base">NGN</div>
            <input
              type="number"
              placeholder="0.00"
              className="ml-4 focus:outline-none w-full font-bold"
            />
          </div>
        )}
        {children}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';

FormInput.defaultProps = {
  type: 'text',
  as: 'input',
};

export default FormInput;
