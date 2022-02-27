import ContactCard from '../ContactCard';
import Accordion from './Accordion';

const FAQs = () => {
  const questions = [
    {
      id: 0,
      name: 'How to I create an account',
      ans: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      id: 1,
      name: 'How long does it take for installation',
      ans: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      id: 2,
      name: 'How to monitor my usage',
      ans: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      id: 4,
      name: 'How to request for solar Electricity',
      ans: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      id: 5,
      name: 'How can I access support',
      ans: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center">
          <h1 className="mx-auto max-w-2xl text-center text-2xl font-bold lg:text-5xl ">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mx-auto mt-12 max-w-6xl lg:mt-24 2xl:max-w-5xl">
          {questions.map((question, index) => (
            <Accordion {...question} key={index} />
          ))}
        </div>
        <div className="mt-8 text-center lg:mt-24">
          <p className="text-sm font-semibold text-primary-darker lg:text-base">
            <span>Need help? talk to our</span>
            <a href="" className="ml-2 text-primary-base">
              Customer support
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 hidden w-64 justify-center rounded-xl px-5 py-3 shadow-lg lg:flex">
        <ContactCard />
      </div>
    </div>
  );
};

export default FAQs;
