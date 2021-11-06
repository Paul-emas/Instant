import gsap from 'gsap';
import { useEffect, useState } from 'react';
import PostPaidForm from '../forms/PostPaidForm';
import PrepaidForm from '../forms/PrepaidForm';
import BuyElectricityTab from '../tabs/BuyElectricityTab';

const QuickPay = props => {
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const tabProps = {
    tabs,
    activeTab,
    setActiveTab,
  };

  const onSubmit = data => {
    console.log(data, 'hello');
  };

  return (
    <div className="bg-white w-full lg:w-w-modal 2xl:h-h-modal 2xl:w-9/12 ml-auto -mt-20 lg:mt-24 2xl:mt-36 shadow-soft rounded-2xl lg:rounded-3xl">
      <div className="lg:pt-8">
        <div>
          <h2 className="text-xl lg:text-2xl py-5 lg:py-0 text-center px-8 lg:mb-2 2xl:mb-4 text-black font-bold font-gill">
            Buy Electricity
          </h2>
        </div>
        <BuyElectricityTab {...tabProps} />
        <div className="slideUp">
          {activeTab === 'prepaid' && <PrepaidForm onSubmit={onSubmit} />}
          {activeTab === 'postpaid' && <PostPaidForm onSubmit={onSubmit} />}
        </div>
      </div>
    </div>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
