const index = ({ data, center = false, activeTab, setActiveTab, small }) => {
  return (
    <div
      className={`flex ${center ? 'justify-center' : 'justify-center sm:justify-start'} ${
        small ? 'text-xs' : 'text-sm'
      } w-full border-b py-5 px-6`}
    >
      {data?.map(({ name }, ind) => (
        <div
          key={ind}
          onClick={() => setActiveTab(ind)}
          className={`${
            activeTab === ind
              ? 'bg-primary-base font-bold text-white'
              : 'font-semibold text-gray-400'
          } w-full cursor-pointer rounded-lg py-2 text-center sm:w-auto lg:px-6 lg:text-base`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default index;
