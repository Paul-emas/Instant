import DashboardIcon from '../../../public/svgs/coins.svg';
import AuthWrapper from '../../../components/layout/AuthWrapper';
import CreatePin from '../../../components/onboarding/CreatePin';

export default function Create() {
  return (
    <AuthWrapper
      banner="auth-banner-1"
      title="Lorem ipsum dolor sit amet, consetetur sadipscing."
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    >
      <CreatePin />
    </AuthWrapper>
  );
}
