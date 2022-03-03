import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FloatIcon5 from '../../public/svgs/floating/float-5.svg';
import FloatIcon6 from '../../public/svgs/floating/float-6.svg';

const Steps = () => {
  return (
    <div className="py-20 lg:pt-16 lg:pb-40">
      <div className="container relative mx-auto px-4 sm:px-5 xl:container xl:px-14">
        <FloatIcon5 className="absolute left-14 top-24 lg:top-20" />
        <FloatIcon6 className="absolute right-5 -top-12 lg:right-14 lg:-top-8" />
        <h1 className="mx-auto px-3 text-center text-2xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:text-5xl xl:leading-tight">
          We provide <span className="text-secondary-green">amazing features</span> to ensure you
          have the best energy experience
        </h1>
        <div className="mx-auto mt-20 lg:mt-32">
          <div className="grid-cols-4 gap-y-10 gap-x-5 space-y-8 lg:grid lg:space-y-0">
            <div className="rounded-2xl border bg-white px-10 py-12 text-center lg:text-left">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">
                Track your electricity spending
              </div>
              <p className="mt-2 text-sm text-gray-400 lg:text-sm">
                Use your in-app dashboard to track your electricity spending, manage all your bills
                in one place and set reminders for future transactions.
              </p>
            </div>
            <div className="rounded-2xl border bg-white px-10 py-12 text-center lg:text-left">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">Top-up on the go</div>
              <p className="mt-2 text-sm text-gray-400 lg:text-sm">
                Recharge your meter from anywhere, either online or using the app, with an agent or
                from the comfort of your home.
              </p>
            </div>
            <div className="rounded-2xl border bg-white px-10 py-12 text-center lg:text-left">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">Energy Budgeting</div>
              <p className="mt-2 text-sm text-gray-400 lg:text-sm">
                Use your in-app instant energy wallet to set aside money for your next electricity
                payment.
              </p>
            </div>
            <div className="rounded-2xl border bg-white px-10 py-12 text-center lg:text-left">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">Nickname Meter</div>
              <p className="mt-2 text-sm text-gray-400 lg:text-sm">
                Buying electricity for family &friends or do you live in a multi-tenant building?
                You can now give a unique name to every new meter you add on the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
