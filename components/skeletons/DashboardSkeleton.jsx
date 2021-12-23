const DashboardSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex justify-center w-44 items-center  bg-white sm:rounded-lg h-9 relative"></div>
          <div className="flex justify-center w-96 items-center mt-3 bg-white sm:rounded-lg h-7 relative"></div>
        </div>
        <div className="flex justify-center w-44 items-center bg-white sm:rounded-lg h-12 relative"></div>
      </div>
      <div className="grid lg:space-x-5 lg:grid-cols-6 mt-5">
        <div className="lg:col-span-4">
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl h-96 relative"></div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl h-96 relative"></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl py-11 relative"></div>
      <div className="flex justify-center items-center mt-5 bg-white sm:rounded-xl py-48 relative"></div>
    </>
  );
};

export default DashboardSkeleton;
