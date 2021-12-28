const index = ({ data, center = false, activeTab, setActiveTab }) => {
  return (
    <div
      className={`flex ${
        center ? 'justify-center' : 'justify-start'
      } space-x-10 px-8  border-b`}
    >
      {data?.map(({ name }, ind) => (
        <div
          key={ind}
          onClick={() => setActiveTab(ind)}
          className={`${
            activeTab === ind
              ? 'text-primary-base border-b-2 border-base font-bold'
              : 'text-gray-400 font-semibold'
          } text-sm lg:text-base text-center px-12 py-2 cursor-pointer`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default index;
