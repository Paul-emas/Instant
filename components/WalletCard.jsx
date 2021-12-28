import WalletIcon from '../public/svgs/wallet-light.svg';

const WalletCard = () => {
  return (
    <div className="w-full py-8 bg-primary-base rounded-3xl wallet_banner bg-contain bg-no-repeat">
      <div className="flex justify-between items-center px-12">
        <div>
          <WalletIcon />
        </div>
        <div className="text-white text-center">
          <div className="text-md">Your IE wallet</div>
          <div className="text-4xl font-bold">
            <span>&#8358;</span>
            <span className="ml-2">0.00</span>
          </div>
        </div>
        <div>
          <button className="bg-white rounded-lg font-bold py-3 px-5 text-xs uppercase">
            Fund wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
