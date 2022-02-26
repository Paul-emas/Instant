import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutInfo = () => {
  const info = [
    {
      d: 'Use your in-app dashboard to track your electricity spending, manage all your bills in one place and set reminders for future transactions.',
    },
    {
      d: 'Recharge your meter from anywhere, either online or using the app, with an agent or from the comfort of your home.',
    },
    {
      d: 'Use your in-app instant energy wallet to set aside money for your next electricity payment.',
    },
    {
      d: 'Use your in-app dashboard to track your electricity spending, manage all your bills in one place and set reminders for future transactions.',
    },
    {
      d: 'Recharge your meter from anywhere, either online or using the app, with an agent or from the comfort of your home.',
    },
    {
      d: 'Use your in-app instant energy wallet to set aside money for your next electricity payment.',
    },
  ];

  return (
    <div className="bg-secondary-lightGreen py-16 lg:py-36">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <h1 className="mx-auto text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:px-10 lg:text-5xl xl:leading-tight">
          We hope to be the most innovative energy as a service platform across Africa.
        </h1>
        <div className="mx-auto mt-8 max-w-5xl lg:mt-20">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10">
            {info.map((info) => (
              <div
                key={info.d}
                className="rounded-xl bg-white px-4 pt-8 pb-5 text-center lg:rounded-2xl lg:border lg:p-8 lg:text-left"
              >
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="h-5 w-5 text-xl text-primary-base"
                />
                <p className="mt-5 text-xs lg:text-sm">{info.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
