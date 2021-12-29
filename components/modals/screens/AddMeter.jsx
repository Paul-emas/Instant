import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { addNewMeter, getProviders, validateNewMeter } from '../../../api';

import FormInput from '../../forms/FormInput';
import PrimaryButton from '../../Buttons/PrimaryButton';
import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import Modal from '..';
import ProviderSelectInput from '../../forms/ProviderSelectInput';
import { toast } from 'react-toastify';
import cookies from 'js-cookie';

const AddMeter = ({ open, setOpen, selectedMeter, setSelectedMeter }) => {
  const token = cookies.get('token');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const tabs = [{ name: 'Prepaid' }, { name: 'PostPaid' }];

  const [providers, setProviders] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProviders();
    const authPhone = localStorage.getItem('authPhone');
    if (authPhone) {
      setPhone(authPhone);
    }
  }, []);

  async function fetchProviders() {
    const res = await getProviders();
    if (res.data) {
      setProviders(res.data.docs);
    }
  }

  async function onSubmit(formData) {
    if (formData) {
      setIsLoading(true);
      const { label, meter } = formData;

      const response = await validateNewMeter(
        meter,
        selectedProvider._id,
        token,
      );

      const { data, error } = response;

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
          setOpen(false);
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
          close={() => {
            setSelectedMeter(null);
            setOpen(false);
          }}
        >
          <BuyElectricityTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="pt-6 px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ProviderSelectInput
                className="px-5 mt-2"
                label="State of residence"
                placeholder="Enter account number"
                error={errors.select ?? false}
                options={providers}
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
              />
              <FormInput
                className="py-2.5 px-5 mt-2"
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
                className="py-2.5 px-5 mt-2"
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
                onChange={value => setPhone(value)}
              />
              <FormInput
                className="py-2.5 px-5 mt-2"
                id="label"
                errors={errors}
                value={selectedMeter && selectedMeter?.label}
                placeholder="John Doe's Meter"
                label="Nickname meter (Optional)"
                {...register('label', {
                  required: true,
                })}
              />
              <div className="mt-10">
                <PrimaryButton
                  loading={isLoading}
                  disabled={isLoading}
                  size="base"
                >
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
