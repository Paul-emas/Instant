import Navbar from '../components/layout/Navbar';
import ErrorIcon from '../public/svgs/error-page.svg';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="fixed flex min-h-screen w-full items-center justify-center bg-primary-light">
        <div className="text-center">
          <ErrorIcon className="mx-auto" />
          <div className="mt-4 text-4xl font-bold">Page not Found</div>
        </div>
      </div>
    </div>
  );
}
