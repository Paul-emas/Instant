import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { getProviders } from '../../api';
import PostPaidForm from '../forms/PostPaidForm';
import PrepaidForm from '../forms/PrepaidForm';
import QuickPayPhoneInput from '../forms/QuickPayPhoneInput';
import BuyElectricityTab from '../tabs/BuyElectricityTab';

const QuickPay = () => {
  const tabs = [
    { id: 0, name: 'prepaid' },
    { id: 1, name: 'postpaid' },
  ];
  const [activeTab, setActiveTab] = useState(null);
  const [openQuickBuyModal, setOpenQuickBuyModal] = useState(false);
  const [providers, setProviders] = useState([]);

  const tabProps = {
    tabs,
    activeTab,
    setActiveTab,
  };

  async function fetchProviders() {
    const res = await getProviders();
    if (res.data) {
      setProviders(res.data.docs);
    }
  }

  useEffect(() => {
    fetchProviders();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    if (openQuickBuyModal) {
      tl.to('.hide', { autoAlpha: 0, display: 'none' });
      tl.fromTo(
        '.show',
        { autoAlpha: 0 },
        { autoAlpha: 1, display: 'block', delay: 0.4 },
      );
    }
    tl.duration(0.8).play();
  }, [openQuickBuyModal]);

  const onSubmit = data => {
    // console.log(data);
  };

  return (
    <>
      <div
        id="box"
        className={`${
          openQuickBuyModal
            ? 'lg:h-modal-md 2xl:h-modal -mt-20 lg:top-44 2xl:top-40'
            : '2xl:h-modal-sm lg:top-56 2xl:top-72'
        } bg-white w-full overflow-hidden ease lg:w-w-modal 2xl:w-9/12 ml-auto shadow-soft rounded-2xl relative lg:rounded-3xl z-20`}
      >
        <div className="hide">
          <div className="lg:pt-8">
            <div className="max-w-md">
              <h2 className="text-xl lg:text-32xl py-5 lg:py-0 px-8 lg:mb-2 2xl:mb-5 leading-tight 2xl:leading-tight text-black font-bold font-gill">
                Buy Electricity, start by entering your phone number
              </h2>
            </div>
            <QuickPayPhoneInput
              setActiveTab={setActiveTab}
              setOpenQuickBuyModal={setOpenQuickBuyModal}
            />
          </div>
          <div className="w-full h-14 text-primary-dark font-medium flex justify-center items-center bg-primary-light">
            <span>Dont have an account?</span>
            <Link href="/auth/sign-up">
              <a className="text-primary-base ml-2">Sign up</a>
            </Link>
          </div>
        </div>
        <div className="lg:pt-8 show hidden">
          <div>
            <h2 className="text-xl lg:text-2xl py-5 lg:py-0 text-center px-8 lg:mb-2 2xl:mb-4 text-black font-bold font-gill">
              Buy Electricity
            </h2>
          </div>
          <BuyElectricityTab {...tabProps} />
          <div className="slideUp">
            {activeTab === 0 && <PrepaidForm providers={providers} />}
            {activeTab === 1 && <PostPaidForm providers={providers} />}
          </div>
        </div>
      </div>
    </>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
