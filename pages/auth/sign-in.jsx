import Login from '../../components/onboarding/Login';
import AuthWrapper from '../../components/layout/AuthWrapper';

export default function SignIn() {
  return (
    <AuthWrapper
      banner="auth-banner-1"
      title="Lorem ipsum dolor sit amet, consetetur sadipscing."
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    >
      <Login />
    </AuthWrapper>
  );
}
