const index = ({ data, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center lg:justify-start space-x-10 px-8 font-bold border-b">
      {data?.map(({ name }, ind) => (
        <div
          key={ind}
          onClick={() => setActiveTab(ind)}
          className={`${
            activeTab === ind
              ? 'text-primary-base border-b-2 border-base'
              : 'text-gray-400'
          } text-sm lg:text-base text-center px-12 py-2 cursor-pointer`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default index;