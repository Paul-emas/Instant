import gsap from 'gsap';
import { useEffect, useState } from 'react';
import PostPaidForm from '../forms/PostPaidForm';
import PrepaidForm from '../forms/PrepaidForm';
import QuickPayPhoneInput from '../forms/QuickPayPhoneInput';
import BuyElectricityTab from '../tabs/BuyElectricityTab';

const QuickPay = () => {
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [openQuickBuyModal, setOpenQuickBuyModal] = useState(false);

  const tabProps = {
    tabs,
    activeTab,
    setActiveTab,
  };

  useEffect(() => {
    const tl = gsap.timeline();
    if (openQuickBuyModal) {
      tl.fromTo(
        '.grow',
        { autoAlpha: 0, scale: 1.2 },
        { autoAlpha: 1, scale: 1 },
      );
    } else {
      tl.fromTo('.reduce', { autoAlpha: 0 }, { autoAlpha: 1 });
    }
    tl.duration(0.4).play();
  }, [openQuickBuyModal]);

  const onSubmit = data => {
    console.log(data, 'hello');
  };

  return (
    <>
      {!openQuickBuyModal && (
        <div className="reduce">
          <div className="bg-white w-full lg:w-w-modal 2xl:w-9/12 -mt-20 lg:mt-56 2xl:mt-72 ml-auto shadow-soft rounded-2xl lg:rounded-3xl">
            <div className="lg:pt-8">
              <div>
                <h2 className="text-xl lg:text-2xl py-5 lg:py-0 text-center px-8 lg:mb-2 2xl:mb-4 text-black font-bold font-gill">
                  Buy Electricity, start by entering your phone number
                </h2>
              </div>
              <QuickPayPhoneInput setOpenQuickBuyModal={setOpenQuickBuyModal} />
            </div>
          </div>
        </div>
      )}

      {openQuickBuyModal && (
        <div className="grow">
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
                {activeTab === 'postpaid' && (
                  <PostPaidForm onSubmit={onSubmit} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
