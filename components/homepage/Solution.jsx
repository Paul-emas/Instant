import DashBoardIcon from '../../public/svgs/dashboard-banner.svg';

const Solution = () => {
  return (
    <div className="py-32 flex items-center bg-white">
      <div className="container mx-auto px-10">
        <h1 className="text-5xl font-bold max-w-xl text-center mx-auto ">
          Our Solution
        </h1>
        <DashBoardIcon className="mx-auto mt-14 2xl:mt-20 transform 2xl:scale-110" />
      </div>
    </div>
  );
};

export default Solution;
