import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { addNewMeter, validateNewMeter } from '../../../api';

import FormInput from '../../forms/FormInput';
import PrimaryButton from '../../Buttons/PrimaryButton';
import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import Modal from '..';
import ProviderSelectInput from '../../forms/ProviderSelectInput';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector, setUserPhone } from '../../../slices/persist';
import useFetchMeters from '../../../hooks/useFetchMeters';

const AddMeter = ({ open, setOpen, goBack, selectedMeter, setSelectedMeter }) => {
  const dispatch = useDispatch();
  const { token, userPhone } = useSelector(persistSelector);
  const { init } = useFetchMeters();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const tabs = [{ name: 'Prepaid' }, { name: 'Postpaid' }];
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  async function onSubmit(formData) {
    if (formData) {
      setIsLoading(true);
      const { label, meter } = formData;

      const response = await validateNewMeter(meter, selectedProvider._id, token);

      const { data, error } = response;

      dispatch(
        setUserPhone({
          phone: {
            number: phone,
            code: country.countryCode,
            value: phone,
          },
          country,
        }),
      );

      if (error) {
        setIsLoading(false);
        toast.error('Invalid Meter Entered');
      }

      if (data) {
        const payload = {
          meter: data?._id,
          label,
          recipient: {
            number: phone,
            code: country.countryCode,
            value: phone,
          },
        };

        const resp = await addNewMeter(payload, token);

        if (resp?.error) {
          setIsLoading(false);
          toast.error(resp?.error?.data?.errors[0]?.message);
        }

        if (resp?.data) {
          reset();
          setIsLoading(false);
          init();
          goBack ? goBack() : setOpen(false);
          toast.success('Meter Has Been Added Successfully');
        }
      }
    }
  }

  return (
    <>
      {open && (
        <Modal
          title={`${selectedMeter ? 'Edit Meter' : 'Add New Meter'}`}
          border={false}
          goBack={goBack}
          close={() => {
            setSelectedMeter(null);
            setOpen(false);
          }}
        >
          <div className={`${goBack && 'pt-5'}`}>
            <BuyElectricityTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="px-6 pt-6 lg:px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ProviderSelectInput
                className="mt-2 px-5"
                label="State of residence"
                error={errors.select ?? false}
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
              />
              <FormInput
                className="mt-2 py-2.5 px-5"
                type="number"
                id="meter"
                value={selectedMeter && selectedMeter?.meter?.number}
                errors={errors}
                placeholder="Enter meter number"
                label="Meter number"
                {...register('meter', {
                  required: true,
                })}
              />
              <FormInput
                className="mt-2 py-2.5 px-5"
                type="phone"
                id="phone"
                label="Phone number"
                value={phone}
                isValid={(value, country) => {
                  if (value.match(/12345/)) {
                    return 'Invalid value: ' + value + ', ' + country.name;
                  } else if (value.match(/1234/)) {
                    return false;
                  } else {
                    setCountry(country);
                    return true;
                  }
                }}
                onChange={(value) => setPhone(value)}
              />
              <FormInput
                className="mt-2 py-2.5 px-5"
                id="label"
                errors={errors}
                value={selectedMeter && selectedMeter?.label}
                placeholder="John Doe's Meter"
                label="Nickname meter"
                {...register('label', {
                  required: true,
                })}
              />
              <div className="mt-10">
                <PrimaryButton loading={isLoading} size="base">
                  {selectedMeter ? 'Save' : 'Add Meter'}
                </PrimaryButton>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

AddMeter.propTypes = {};

export default AddMeter;
