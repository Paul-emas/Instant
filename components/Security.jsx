const Security = () => {
  return (
    <div className="mx-auto max-w-lg px-10 outline-black">
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-base font-bold">Pin</div>
          <div className="text-xs text-gray-400">Your 6 digit login Pin</div>
        </div>
        <div>
          <button className="rounded-lg bg-primary-light py-2 px-4 text-xs font-bold text-gray-700 active:bg-gray-200">
            Change pin
          </button>
        </div>
      </div>
      <div className="my-3 flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-base font-bold">Privacy policy</div>
          <div className="text-xs text-gray-400">Learn about policies</div>
        </div>
        <div>
          <button className="rounded-lg bg-primary-light py-2 px-4 text-xs font-bold text-gray-700 active:bg-gray-200">
            View
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-base font-bold">Terms of use</div>
          <div className="text-xs text-gray-400">Terms of conditons</div>
        </div>
        <div>
          <button className="rounded-lg bg-primary-light py-2 px-4 text-xs font-bold text-gray-700 active:bg-gray-200">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
