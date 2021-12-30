import WalletIcon from '../public/svgs/wallet-light.svg';

const WalletCard = ({ className }) => {
  return (
    <div
      className={`${className} w-full pt-9 pb-24 bg-primary-base rounded-3xl relative overflow-hidden`}
    >
      <div className="absolute w-full sm:w-446 h-full right-0 top-0 z-10">
        <img
          src="/images/wallet-banner.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full z-20">
        <div className="flex justify-center sm:justify-between items-center px-12 z-20">
          <div className="hidden sm:block">
            <WalletIcon />
          </div>
          <div className="text-white text-center">
            <div className="text-gray-300 sm:text-md">Your IE wallet</div>
            <div className="text-2xl sm:text-4xl font-bold">
              <span>&#8358;</span>
              <span className="ml-2">0.00</span>
            </div>
          </div>
          <div>
            <button className="bg-white rounded-lg font-bold py-3 px-5 text-xs uppercase hidden sm:block">
              Fund wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
