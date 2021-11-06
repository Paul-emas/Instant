import gsap from 'gsap';

const BuyElectricityTab = ({ tabs, activeTab, setActiveTab }) => {
  const animate = () => {
    const tl = gsap.timeline();
    if (activeTab === 'prepaid') {
      tl.fromTo('.slideUp', { x: 30, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });
    } else {
      tl.fromTo('.slideUp', { x: -30, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });
    }
    tl.duration(0.5).play();
  };

  return (
    <div className="flex justify-center px-8 font-bold border-b">
      {tabs.map(({ id, name }) => (
        <div
          key={id}
          onClick={() => {
            setActiveTab(name);
            animate();
          }}
          className={`${
            activeTab === name ? 'active-tab' : 'text-gray-400'
          } text-sm capitalize w-52 text-center duration-200 lg:text-base py-2 cursor-pointer border-b-2 border-transparent`}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default BuyElectricityTab;
