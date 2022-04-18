import Navbar from '../components/layout/Navbar';
import ErrorIcon from '../public/svgs/error-page.svg';
import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <Navbar />
      <div className="fixed flex min-h-screen w-full items-center justify-center bg-primary-light">
        <div className="text-center">
          <ErrorIcon className="mx-auto" />
          <div className="mt-4 text-4xl font-bold">Something went wrong</div>
          <p className="mt-3 max-w-lg px-3 text-gray-500">
            An error occured, if issue persist kindly{' '}
            <Link href="/contact">
              <a className="font-bold text-primary-base">Contact us</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
