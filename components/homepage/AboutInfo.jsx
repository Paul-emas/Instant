import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutInfo = () => {
  return (
    <div className="bg-secondary-lightGreen py-36">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <h1 className="mx-auto px-10 text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:text-5xl xl:leading-tight">
          We hope to be the most innovative energy as a service platform across Africa.
        </h1>
        <div className="mx-auto mt-8 max-w-5xl lg:mt-20">
          <div className="grid-cols-3 gap-10 space-y-8 lg:grid lg:space-y-0">
            <div className="rounded-2xl border bg-white p-8">
              <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 text-xl text-primary-base" />
              <p className="mt-5 text-xs lg:text-sm">
                Use your in-app dashboard to track your electricity spending, manage all your bills
                in one place and set reminders for future transactions.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8">
              <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 text-xl text-primary-base" />
              <p className="mt-5 text-xs lg:text-sm">
                Recharge your meter from anywhere, either online or using the app, with an agent or
                from the comfort of your home.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8">
              <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 text-xl text-primary-base" />
              <p className="mt-5 text-xs lg:text-sm">
                Use your in-app instant energy wallet to set aside money for your next electricity
                payment.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8">
              <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 text-xl text-primary-base" />
              <p className="mt-5 text-xs lg:text-sm">
                Use your in-app dashboard to track your electricity spending, manage all your bills
                in one place and set reminders for future transactions.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8">
              <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 text-xl text-primary-base" />
              <p className="mt-5 text-xs lg:text-sm">
                Recharge your meter from anywhere, either online or using the app, with an agent or
                from the comfort of your home.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8">
              <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5 text-xl text-primary-base" />
              <p className="mt-5 text-xs lg:text-sm">
                Use your in-app instant energy wallet to set aside money for your next electricity
                payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
