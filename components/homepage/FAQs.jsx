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
    <div className="py-24 bg-white">
      <div className="container px-10 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold max-w-2xl text-center mx-auto font-gill">
            Instant Energy FAQs
          </h1>
          <p className="mt-6 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="mt-24 max-w-6xl 2xl:max-w-5xl mx-auto">
          {questions.map((question, index) => (
            <Accordion {...question} key={index} />
          ))}
        </div>
        <div className="text-center mt-24">
          <p className="text-primary-darker font-semibold">
            <span>Need help? talk to our</span>
            <a href="" className="ml-2 text-primary-base">
              Customer support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
