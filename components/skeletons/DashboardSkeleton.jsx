const DashboardSkeleton = () => {
  return (
    <>
      <div className="bg-primary-light block sm:hidden rounded-3xl w-full py-16"></div>
      <div className="flex items-center justify-between">
        <div className="hidden sm:block">
          <div className="flex justify-center w-44 items-center  bg-primary-light sm:bg-white sm:rounded-lg h-9 relative"></div>
          <div className="flex justify-center w-96 items-center mt-3 bg-primary-light sm:bg-white sm:rounded-lg h-7 relative"></div>
        </div>
        <div className="hidden sm:flex justify-center w-44 items-center bg-primary-light sm:bg-white sm:rounded-lg h-12 relative"></div>
      </div>
      <div className="grid lg:space-x-5 lg:grid-cols-6 sm:mt-5">
        <div className="lg:col-span-4">
          <div className="flex justify-center items-center mt-5 bg-primary-light sm:bg-white rounded-xl h-64 sm:h-96 relative"></div>
          <div className="flex sm:hidden mt-5 space-x-4">
            <div className="flex justify-center items-center bg-primary-light sm:bg-white rounded-xl w-1/4 h-10 relative"></div>
            <div className="flex justify-center items-center bg-primary-light sm:bg-white rounded-xl w-1/4 h-10 relative"></div>
            <div className="flex justify-center items-center bg-primary-light sm:bg-white rounded-xl w-1/4 h-10 relative"></div>
            <div className="flex justify-center items-center bg-primary-light sm:bg-white rounded-xl w-1/4 h-10 relative"></div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex justify-center items-center mt-5 bg-primary-light sm:bg-white rounded-xl h-96 relative"></div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center mt-5 bg-primary-light sm:bg-white rounded-xl py-11 relative"></div>
      <div className="flex justify-center items-center mt-5 bg-primary-light sm:bg-white rounded-xl py-48 relative"></div>
    </>
  );
};

export default DashboardSkeleton;
