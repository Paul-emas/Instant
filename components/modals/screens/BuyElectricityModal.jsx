import { useState } from 'react';
import SelectInput from '../../forms/SelectInput';
import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import Modal from '../index';
import FormInput from '../../forms/FormInput';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../Buttons/PrimaryButton';

const BuyElectricityModal = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];

  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedMeter, setSelectedMeter] = useState(null);

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <div>
      {step === 0 && open && (
        <Modal title="Buy Electricity" border={false} setOpen={setOpen}>
          <BuyElectricityTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="pt-6 px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <SelectInput
                className="mt-2 py-2.5"
                label="Select a meter"
                options={[{ name: '20202020' }, { name: '1234562625' }]}
                selectedOption={selectedMeter}
                setSelectedOption={setSelectedMeter}
              />
              <FormInput
                className="py-2.5 px-5 mt-2"
                type="currency"
                id="amount"
                errors={errors}
                placeholder="Enter account number"
                label="How much will you like to purchase?"
                error={errors.amount ?? false}
                {...register('amount', {
                  required: true,
                })}
              />
              <div className="mt-10">
                <PrimaryButton size="base">Proceed to Payment</PrimaryButton>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BuyElectricityModal;
