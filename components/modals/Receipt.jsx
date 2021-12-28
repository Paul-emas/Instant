import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { parse } from 'fecha';
import cookie from 'js-cookie';
import {
  faFileDownload,
  faPrint,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Receipt = ({ receipt }) => {
  const token = cookie.get('token');
  function PrintElem() {
    var data = document.getElementById('reciept').innerHTML;
    var myWindow = window.open(
      '',
      'Instant Energy Recharge Receipt',
      'height=400,width=600',
    );
    myWindow.document.write(
      '<html><head><title>Instant Energy Recharge Receipt</title>',
    );
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
    <div id="reciept" className="-mt-6 px-8">
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
        <div className="text-2xl ">{receipt?.token}</div>
        <img
          src={receipt?.meter?.provider?.disco?.logo}
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
            <div className="text-sm font-bold ">12-06-2021: 10: 07</div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Reference code
            </div>
            <div className="text-sm font-bold ">{receipt?.reference}</div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Meter number
            </div>
            <div className="text-sm font-bold ">{receipt?.meter?.number}</div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Meter name
            </div>
            <div className="text-sm font-bold ">
              {receipt?.meter?.disco?.shortName}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Meter address
            </div>
            <div className="text-sm font-bold ">{receipt?.meter?.address}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-primary-gray">
              Units purchased
            </div>
            <div className="text-sm font-bold ">{receipt?.units} kwh</div>
          </div>
        </div>
        <div className="py-4">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Amount
            </div>
            <div className="text-sm font-bold ">
              {receipt?.country?.currency} {receipt?.amount}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">VAT</div>
            <div className="text-sm font-bold ">
              {receipt?.country?.currency} {receipt?.charge?.vat}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">Debt</div>
            <div className="text-sm font-bold ">
              {receipt?.country?.currency} {receipt?.outstanding}
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-primary-gray">
              Service Charge
            </div>
            <div className="text-sm font-bold ">
              {receipt?.country?.currency} {receipt?.charge?.fee}
            </div>
          </div>
          <div className="flex border-t border-b py-4 border-primary-lighter justify-between items-center mb-3">
            <div className="text-sm font-bold ">Total</div>
            <div className="text-sm font-bold ">
              {receipt?.country?.currency} {receipt?.gross}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm text-primary-gray font-semibold">
            Thanks for using Instant Energy
          </span>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="w-10 h-10 flex justify-center items-center bg-primary-light rounded-full">
              <FontAwesomeIcon icon={faShareAlt} className="w-5 h-5" />
            </div>
            <div
              onClick={() => PrintElem()}
              className="w-10 h-10 flex justify-center items-center bg-primary-light rounded-full"
            >
              <FontAwesomeIcon icon={faFileDownload} className="w-5 h-5" />
            </div>
          </div>
        </div>
        {!token && (
          <div className="mt-6">
            <p className="text-sm">
              New to Instant Energy?{' '}
              <Link href="/auth/sign-up">
                <a className="font-bold text-primary-base">Create an Account</a>
              </Link>
            </p>
          </div>
        )}

        <button
          data-tooltip-target="tooltip-light"
          data-tooltip-style="light"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Light tooltip
        </button>
        <div
          id="tooltip-light"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="top"
          style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(478px, 204px, 0px);"
        >
          Tooltip content
          <div
            className="tooltip-arrow"
            data-popper-arrow=""
            style="position: absolute; left: 0px; transform: translate3d(58px, 0px, 0px);"
          ></div>
        </div>
      </div>
    </div>
  );
};

Receipt.propTypes = {};

export default Receipt;
