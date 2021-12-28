import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/homepage/Header';
import QuickPay from '../components/modals/QuickPay';
import Partners from '../components/homepage/Partners';
import UserServices from '../components/homepage/UserServices';
import BuyElectricity from '../components/homepage/BuyElectricity';
import Counter from '../components/homepage/Counter';
import DownloadApp from '../components/homepage/DownloadApp';
import FAQs from '../components/homepage/FAQs';
import People from '../components/homepage/People';
import Slider from '../components/homepage/Slider';
import CTA from '../components/homepage/CTA';
import Footer from '../components/homepage/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instant Energy - Buy Electricity Units in Nigeria</title>
        <meta
          name="description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        />
        <meta
          property="og:description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div className="lg:relative lg:w-1/2 max-w-3xl top-20">
          <img src="/images/woman.webp" className="object-contain" />
        </div>
        <div className="md:max-w-lg lg:max-w-full mx-auto lg:w-1/2 pb-16 2xl:pb-10">
          <QuickPay />
        </div>
      </Header>
      <main>
        <Partners />
        <UserServices border />
        <BuyElectricity bg="bg-secondary-lightGreen" />
        <BuyElectricity
          title="Never run of power with solar electricity"
          iconText="Solar electricity"
          cta="Request Solar"
          alignRight
        />
        <BuyElectricity
          title="Buy electricity units at Offgrid"
          cta="Request Demo"
          bg="bg-secondary-lightBlue"
        />
        <Counter />
        <DownloadApp />
        <FAQs />
        <People />
        <Slider />
        <Partners />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
