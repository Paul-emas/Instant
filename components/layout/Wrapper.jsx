import { useRouter } from 'next/router';
import Detailbar from '../layout/Detailbar';
import Sidebar from '../layout/Sidebar';

const Wrapper = ({ children }) => {
  const router = useRouter();
  const token = false;
  let isRouteProtected = false;
  const inActiveRoutes = [
    '/solar-plans',
    '/offgrid',
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/otp/pin',
    '/auth/otp/generate',
    '/auth/otp/forgot',
    '/faqs',
  ];
  inActiveRoutes.forEach(route => {
    if (router.asPath.includes(route) || router.asPath === '/') {
      isRouteProtected = true;
    }
    return isRouteProtected;
  });

  console.log(isRouteProtected);

  return (
    <>
      {isRouteProtected ? (
        <div>{children}</div>
      ) : (
        <div className="h-screen overflow-x-hidden w-full bg-gray-300">
          <div className="min-h-screen">
            <Sidebar />
            <div className="float-left main mar overflow-x-hidden p-0 bg-primary-light">
              <Detailbar />
              <main className="min-h-screen float-left main-content">
                <div className="container px-5 2xl:px-7">{children}</div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wrapper;
