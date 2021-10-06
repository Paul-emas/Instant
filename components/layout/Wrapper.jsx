import { useRouter } from 'next/router';
import Detailbar from '../layout/Detailbar';
import Sidebar from '../layout/Sidebar';

const Wrapper = ({ children }) => {
  const router = useRouter();
  const inActiveRoutes = ['/', '/solar-plans', '/offgrid', '/faqs'];
  let isDefaultRoute = false;
  inActiveRoutes.forEach(route => {
    if (route === router.asPath) {
      isDefaultRoute = true;
    }
    return isDefaultRoute;
  });

  return (
    <>
      {isDefaultRoute ? (
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
