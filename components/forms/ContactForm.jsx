import FormInput from './FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import SocialCard from '../SocialCard';

const ContactForm = () => {
  return (
    <div className="shadow-soft w-modal rounded-2xl bg-white">
      <div className="px-6 pt-5 lg:px-8">
        <div className="relative top-1 text-center text-xl font-bold">Contact form</div>
        <form className="mt-8">
          <FormInput label="Your name" placeholder="Enter your name" className="mt-2 py-2.5 px-5" />
          <FormInput
            label="Your email"
            type="email"
            placeholder="Enter your email address"
            className="mt-2 py-2.5 px-5"
          />
          <FormInput label="Your name" type="textarea" placeholder="Enter your name" />
          <div className="mt-6">
            <PrimaryButton size="base">Send message</PrimaryButton>
          </div>
        </form>
      </div>
      <div className="mt-10 border-t pb-10">
        <SocialCard />
      </div>
    </div>
  );
};

export default ContactForm;
