import Image from 'next/image';
import Link from 'next/link';
import { faFileDownload, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';

const Receipt = ({ receipt }) => {
  const { isLoggedIn } = useSelector(persistSelector);

  function PrintElem() {
    var data = document.getElementById('reciept').innerHTML;
    var myWindow = window.open('', 'Instant Energy Recharge Receipt', 'height=400,width=600');
    myWindow.document.write('<html><head><title>Instant Energy Recharge Receipt</title>');
    myWindow.document.write(
      `<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">`,
    );
    myWindow.document.write('</head><body >');
    myWindow.document.write(data);
    myWindow.document.write('</body></html>');
    myWindow.document.close();

    myWindow.onload = function () {
      myWindow.focus();
      myWindow.print();
    };
  }

  return (
    <div id="reciept" className="-mt-6 px-6 lg:px-8">
      <div className="flex justify-center">
        <Image
          src="/images/logo.webp"
          width={160.05}
          height={34}
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-primary-gray">Your Electricity Token</p>
        <div className="text-2xl font-bold">{receipt?.token}</div>
        <img
          src={receipt?.meter?.provider?.disco?.logo}
          alt={receipt?.meter?.disco?.shortName}
          width={41.5}
          height={48.5}
          className="mx-auto my-4"
        />
        <div className="border-t border-b py-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Date Issued</div>
            <div className="text-sm font-semibold">
              {moment(receipt?.createdAt).utc().format('LLL')}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Reference code</div>
            <div className="text-sm font-semibold">{receipt?.reference}</div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Meter number</div>
            <div className="text-sm font-semibold">{receipt?.meter?.number}</div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Meter name</div>
            <div className="text-sm font-semibold">{receipt?.meter?.name}</div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Meter address</div>
            <div className="text-sm font-semibold">{receipt?.meter?.address}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Units purchased</div>
            <div className="text-sm font-semibold">{receipt?.units} kwh</div>
          </div>
        </div>
        <div className="py-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Amount</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.amount}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">VAT</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.charge?.vat}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Debt</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.outstanding}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-gray">Service Charge</div>
            <div className="text-sm font-semibold">
              {receipt?.country?.currency} {receipt?.charge?.fee}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between border-t border-b border-primary-lighter py-4">
            <div className="text-sm font-bold">Total</div>
            <div className="text-sm font-bold">
              {receipt?.country?.currency} {receipt?.amount}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xs font-semibold text-primary-gray">
            Thanks for using Instant Energy
          </span>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
              <FontAwesomeIcon icon={faShareAlt} className="h-5 w-5" />
            </div>
            <div
              onClick={() => PrintElem()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light"
            >
              <FontAwesomeIcon icon={faFileDownload} className="h-5 w-5" />
            </div>
          </div>
        </div>
        {!isLoggedIn && (
          <div className="mt-6">
            <p className="text-sm">
              New to Instant Energy?{' '}
              <Link href="/sign-up">
                <a className="font-semibold text-primary-base">Create an Account</a>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Receipt.propTypes = {};

export default Receipt;
