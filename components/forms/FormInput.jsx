import { forwardRef } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, {
  isValidPhoneNumber,
} from 'react-phone-number-input/react-hook-form';

const FormInput = forwardRef(
  (
    { as, type, label, control, options, children, className, ...props },
    ref,
  ) => {
    const As = as;

    return (
      <div className="mb-2.5 2xl:mb-4">
        <label className="text-gray-400 font-bold text-sm label">{label}</label>
        {type !== 'phone' && type !== 'select' && type !== 'currency' && (
          <As
            name={label}
            autoComplete="off"
            ref={ref}
            type={type}
            className={`${className} form-input focus:border-skin-theme focus:outline-none`}
            {...props}
          />
        )}

        {type === 'phone' && (
          <div
            className={`${className} form-input focus-within:bg-primary-light focus-within:border-primary-base focus:outline-none`}
          >
            <PhoneInput
              defaultCountry="NG"
              name={type}
              control={control}
              rules={{ required: true }}
              {...props}
            />
          </div>
        )}

        {type === 'select' && (
          <select
            {...props}
            className={`${className} form-select form-input focus:border-gray-400 focus:outline-none`}
            placeholder="Regular input"
          >
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        {type === 'currency' && (
          <div
            className={`${className} form-input flex focus-within:bg-primary-light focus-within:border-primary-base`}
          >
            <div className="text capitalize text-primary-base">NGN</div>
            <input
              {...props}
              type="number"
              placeholder="0.00"
              className="ml-4 focus:outline-none w-full font-bold focus:bg-primary-light"
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
