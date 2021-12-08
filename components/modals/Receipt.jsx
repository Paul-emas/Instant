import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { parse } from 'fecha';
import {
  faFileDownload,
  faPrint,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Receipt = ({ receipt }) => {
  function PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write(
      '<html><head><title>' + document.title + '</title>',
    );
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  }

  return (
    <div id="reciept" className="mt-6 px-8">
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
        <div className="text-2xl font-gill">{receipt?.token}</div>
        <img
          src={receipt?.meter?.disco?.logo}
          alt={receipt?.meter?.disco?.shortName}
          width={41.5}
          height={48.5}
          className="mx-auto my-4"
        />
        <div className="border-t border-b py-4">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Date Issued
            </div>
            <div className="text-sm font-bold">12-06-2021: 10: 07</div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Reference code
            </div>
            <div className="text-sm font-bold">{receipt?.reference}</div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Meter number
            </div>
            <div className="text-sm font-bold">{receipt?.meter?.number}</div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Meter name
            </div>
            <div className="text-sm font-bold">
              {receipt?.meter?.disco?.shortName}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Meter address
            </div>
            <div className="text-sm font-bold">{receipt?.meter?.address}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-primary-gray">
              Units purchased
            </div>
            <div className="text-sm font-bold">{receipt?.units} kwh</div>
          </div>
        </div>
        <div className="border-b py-4">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Amount
            </div>
            <div className="text-sm font-bold">
              {receipt?.country?.currency} {receipt?.amount}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">VAT</div>
            <div className="text-sm font-bold">
              {receipt?.country?.currency} {receipt?.charge?.vat}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">Debt</div>
            <div className="text-sm font-bold">
              {receipt?.country?.currency} {receipt?.outstanding}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Service Charge
            </div>
            <div className="text-sm font-bold">
              {receipt?.country?.currency} {receipt?.charge?.fee}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm text-primary-gray font-semibold">
            Thanks for using Instant Energy
          </span>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="w-10 h-10 flex justify-center items-center bg-primary-light rounded-full">
              <FontAwesomeIcon icon={faShareAlt} className="w-6 h-6" />
            </div>
            <div
              onClick={() => PrintElem('reciept')}
              className="w-10 h-10 flex justify-center items-center bg-primary-light rounded-full"
            >
              <FontAwesomeIcon icon={faPrint} className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-primary-light rounded-full">
              <FontAwesomeIcon icon={faFileDownload} className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm">
            New to Instant Energy?{' '}
            <Link href="/auth/sign-up">
              <a className="font-bold text-primary-base">Create an Account</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Receipt.propTypes = {};

export default Receipt;
