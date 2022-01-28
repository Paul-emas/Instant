const index = ({ data, center = false, activeTab, setActiveTab }) => {
  return (
    <div
      className={`flex ${
        center ? 'justify-center' : 'justify-center sm:justify-start'
      } w-full border-b px-6 sm:space-x-10 sm:px-8`}
    >
      {data?.map(({ name }, ind) => (
        <div
          key={ind}
          onClick={() => setActiveTab(ind)}
          className={`${
            activeTab === ind
              ? 'border-b-2 border-base font-bold text-primary-base'
              : 'font-semibold text-gray-400'
          } w-full cursor-pointer px-12 py-2 text-center text-sm sm:w-auto lg:text-base`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default index;
