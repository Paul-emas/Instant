const index = ({ data, center = false, activeTab, setActiveTab, small }) => {
  return (
    <div
      className={`flex ${center ? 'justify-center' : 'justify-center sm:justify-start'} ${
        small ? 'text-xs' : 'text-sm'
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
          } w-full cursor-pointer py-2 text-center sm:w-auto lg:px-12 lg:text-base`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default index;
