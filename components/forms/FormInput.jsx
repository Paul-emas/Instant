import { forwardRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FormInput = forwardRef(
  ({ as, type, label, error, control, children, className, ...props }, ref) => {
    const As = as;

    const errorStyles =
      type !== 'phone' && type !== 'currency'
        ? `${
            error
              ? 'border-red-600 focus:border-red-600 focus:outline-none'
              : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none'
          }`
        : `${
            error
              ? 'border-red-600 focus:border-red-600 focus:outline-none'
              : 'focus-within:bg-primary-light focus-within:border-primary-base focus:outline-none '
          }`;

    return (
      <div className="mb-2.5 2xl:mb-4">
        <label className="text-gray-400 font-bold text-xs lg:text-sm label">
          {label}
        </label>
        {type !== 'phone' && type !== 'currency' && (
          <As
            name={label}
            ref={ref}
            type={type}
            className={`${className} ${errorStyles} form-input`}
            {...props}
          />
        )}

        {type === 'phone' && (
          <PhoneInput
            country={'ng'}
            containerClass={`${className} form-input`}
            inputStyle={{
              border: 'none',
              fontFamily: 'Nunito',
              fontWeight: '700',
              fontSize: '16px',
              height: 'auto',
            }}
            countryCodeEditable={false}
            enableSearch
            disableSearchIcon={true}
            dropdownStyle={{ fontWeight: 'normal', fontFamily: 'Nunito' }}
            {...props}
          />
        )}

        {type === 'currency' && (
          <div className={`${className} ${errorStyles} form-input flex`}>
            <div className="text capitalize text-primary-base">NGN</div>
            <input
              {...props}
              type="number"
              placeholder="0.00"
              ref={ref}
              className={`${
                error ? 'focus:bg-white' : 'focus:bg-primary-light'
              } ml-4 focus:outline-none w-full font-bold`}
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
