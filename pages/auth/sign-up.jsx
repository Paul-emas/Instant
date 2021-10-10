import DashboardIcon from '../../public/svgs/signup.svg';
import AuthWrapper from '../../components/layout/AuthWrapper';
import Register from '../../components/onboarding/Register';

export default function SignUp() {
  return (
    <AuthWrapper
      title="Manage your solar plan using our mobile app"
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
      icon={() => (
        <DashboardIcon
          width="396.795"
          height="294.331"
          className="-mt-2.5 2xl:mt-10 -mb-16 2xl:-mb-10 mx-auto transform scale-90 2xl:scale-100"
        />
      )}
    >
      <Register />
    </AuthWrapper>
  );
}
