import DashboardIcon from '../../../public/svgs/signup.svg';
import AuthWrapper from '../../../components/layout/AuthWrapper';
import ForgotPin from '../../../components/onboarding/ForgotPin';

export default function Forgot() {
  return (
    <AuthWrapper
      banner="auth-banner-1"
      title="Manage your solar plan using our mobile app"
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    >
      <ForgotPin />
    </AuthWrapper>
  );
}
