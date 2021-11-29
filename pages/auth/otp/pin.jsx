import DashboardIcon from '../../../public/svgs/coins.svg';
import AuthWrapper from '../../../components/layout/AuthWrapper';
import VerifyPin from '../../../components/onboarding/VerifyPin';

export default function Pin() {
  return (
    <AuthWrapper
      banner="auth-banner-3"
      title="Lorem ipsum dolor sit amet, consetetur sadipscing."
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    >
      <VerifyPin />
    </AuthWrapper>
  );
}
