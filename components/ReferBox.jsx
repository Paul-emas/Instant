import ReferIcon from '../public/svgs/refer-2.svg';

const ReferBox = () => {
  return (
    <div className="bg-white w-full h-96 text-center py-5 rounded-xl mt-10">
      <h1 className="text-2xl font-gill font-semibold mt-3 text-primary-darker">
        Refer & Earn
      </h1>
      <ReferIcon className="mt-5 mx-auto" />
      <p className="text-primary-darker  max-w-sm mx-auto px-10 text-xs 2xl:text-sm mt-5">
        Tell others about instant energy and get real cash in your wallet when
        they buy electricity
      </p>
      <div className="text-sm flex items-center group hover:text-blue-800 text-secondary-blue justify-center mt-6">
        <span className="font-bold">Learn more</span>
        <div className="w-4 h-4 bg-secondary-blue group-hover:bg-blue-800 ml-2 rounded-full text-white flex items-center justify-center text-xxs font-bold">
          <p className="pt-0.5">?</p>
        </div>
      </div>
    </div>
  );
};

ReferBox.propTypes = {};

export default ReferBox;
