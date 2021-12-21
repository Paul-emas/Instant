import AuthWrapper from '../components/layout/AuthWrapper';
import Register from '../components/onboarding/Register';

export default function SignUp() {
  return (
    <AuthWrapper
      banner="auth-banner-2"
      title="Lorem ipsum dolor sit amet, consetetur sadipscing."
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    >
      <Register />
    </AuthWrapper>
  );
}
