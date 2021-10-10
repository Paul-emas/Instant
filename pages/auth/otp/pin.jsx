import DashboardIcon from '../../../public/svgs/coins.svg';
import AuthWrapper from '../../../components/layout/AuthWrapper';
import VerifyPin from '../../../components/onboarding/VerifyPin';

export default function Pin() {
  return (
    <AuthWrapper
      title="Manage your solar plan using our mobile app"
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
      icon={() => (
        <DashboardIcon className="2xl:mt-10 -mb-7 2xl:-mb-0 mx-auto transform scale-90 2xl:scale-100" />
      )}
    >
      <VerifyPin />
    </AuthWrapper>
  );
}
