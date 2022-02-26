import { useForm } from 'react-hook-form';

import WalletIcon from '../../../public/svgs/wallet.svg';

import Modal from '../index';
import FormInput from '../../forms/FormInput';
import PrimaryButton from '../../Buttons/PrimaryButton';

const FundWallet = ({ close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit() {}

  return (
    <Modal border={false} close={close}>
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-10">
        <WalletIcon className="mx-auto" />
        <div className="mx-auto mt-5 mb-10 max-w-xs text-center text-2xl font-bold text-black">
          How much will you like to fund your wallet
        </div>
        <FormInput
          className="mt-2 px-5"
          type="currency"
          id="amount"
          errors={errors}
          label="How much will you like to purchase?"
          error={errors.amount ?? false}
          {...register('amount', {
            required: true,
          })}
        />
        <div className="mt-8">
          <PrimaryButton size="base">Proceed to Payment</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
};

export default FundWallet;
