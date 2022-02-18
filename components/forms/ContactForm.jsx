import React from 'react';
import FormInput from './FormInput';

const ContactForm = () => {
  return (
    <div className="w-contact rounded-2xl bg-white py-8 px-10">
      <div className="relative top-1 text-center font-bold">Contact form</div>
      <div className="form">
        <FormInput label="Your name" placeholder="Enter your name" />
        <FormInput label="Your name" placeholder="Enter your name" />
        <FormInput label="Your name" placeholder="Enter your name" />
      </div>
    </div>
  );
};

export default ContactForm;
