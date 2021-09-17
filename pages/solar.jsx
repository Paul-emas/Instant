export default function Solar() {
  return (
    <div className="pt-5 2xl:pt-10 bg-white">
      <h2 className="text-heading font-extrabold px-7">
        Buy Solar Electricity
      </h2>
      <div className="flex space-x-10 px-7 font-bold border-b mt-4">
        <div className="text-primary-base border-b-2 border-base py-2 cursor-pointer">
          Overview
        </div>
        <div className="text-gray-400 py-2 cursor-pointer">Plans</div>
        <div className="text-gray-400 py-2 cursor-pointer">Appliances</div>
        <div className="text-gray-400 py-2 cursor-pointer">Summary</div>
      </div>
    </div>
  );
}
