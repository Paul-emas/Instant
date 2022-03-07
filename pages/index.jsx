import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/homepage/Header';
import QuickPay from '../components/modals/QuickPay';
import Partners from '../components/homepage/Partners';
import UserServices from '../components/homepage/UserServices';
import Counter from '../components/homepage/Counter';
import DownloadApp from '../components/homepage/DownloadApp';
import Footer from '../components/homepage/Footer';
import HomeBanners from '../components/homepage/HomeBanners';
import People from '../components/homepage/People';
import Slider from '../components/homepage/Slider';
import FAQs from '../components/homepage/FAQs';
import PaymentPlans from '../components/forms/PaymentPlans';
import Buy from '../components/homepage/Buy';
import Steps from '../components/homepage/Steps';

import FloatingIcon1 from '../public/svgs/floating/float-1.svg';
import FloatingIcon2 from '../public/svgs/floating/float-2.svg';
import FloatingIcon3 from '../public/svgs/floating/float-3.svg';
import FloatingIcon4 from '../public/svgs/floating/float-4.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instant Energy - Buy Electricity Units in Nigeria</title>
        <meta name="description" content="Instant Energy - Buy Electrical Units in Nigeria" />
        <meta
          property="og:description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bg="pb-32 bg-primary-light">
        <div className="justify-between lg:flex">
          <div className="relative top-16 max-w-3xl sm:top-20 lg:w-1/2">
            <FloatingIcon1 className="absolute top-24" />
            <FloatingIcon2 className="absolute top-32 right-0" />
            <FloatingIcon3 className="absolute bottom-32 2xl:-left-20" />
            <Image
              src="/images/woman.webp"
              layout="intrinsic"
              width={738}
              height={910}
              objectFit="contain"
              priority
            />
          </div>
          <div className="relative mx-auto flex items-center pt-5 pb-16 md:max-w-lg lg:w-1/2 lg:max-w-full lg:items-start lg:pt-40 2xl:pb-10">
            <QuickPay />
            <FloatingIcon4 className="absolute right-0 bottom-20 2xl:bottom-32 " />
          </div>
        </div>
      </Header>
      <main>
        {/* <Partners /> */}
        <UserServices />
        <Steps />
        <HomeBanners />
        {/* <PaymentPlans /> */}
        {/* <Buy /> */}
        {/* <Counter /> */}
        {/* <DownloadApp /> */}
        <FAQs />
        <People />
        <Slider />
        <Partners />
        <Footer />
      </main>
    </div>
  );
}
