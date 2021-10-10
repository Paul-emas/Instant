import MeterIcon from '../../public/svgs/electric-meter.svg';
import Login from '../../components/onboarding/Login';
import AuthWrapper from '../../components/layout/AuthWrapper';

export default function SignIn() {
  return (
    <AuthWrapper
      title="Manage your solar plan using our mobile app"
      caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
      icon={() => (
        <>
          <MeterIcon
            width="167.798"
            height="192.656"
            className="mt-24 mx-auto hidden 2xl:block"
          />
          <MeterIcon
            width="154.656"
            height="154.656"
            className="mt-16 mx-auto block 2xl:hidden"
          />
        </>
      )}
    >
      <Login />
    </AuthWrapper>
  );
}
