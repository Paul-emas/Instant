import Head from 'next/head';
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
import DownloadButtons from '../components/DownloadButtons';
import ContactCard from '../components/ContactCard';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Instant Energy - Buy Electricity Units in Nigeria</title>
        <meta
          name="description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        />
        <meta
          property="og:description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        /> */}
      {/* <meta property="og:url" content="http://farfill.co.uk/" /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}
      <Header>
        <div className="relative w-1/2 pt-52 2xl:pt-72">
          <div className="max-w-xl">
            <h1 className="text-6xl leading-tight font-extrabold text-font-darker font-gill">
              Buy Electricity at affordable rates
            </h1>
            <p className="text-font-dark text-xl leading-normal mt-6">
              Instant Energy deploys patient, value accretive capital alongside
              international and local value investors to create.
            </p>
            <DownloadButtons className="bg-primary-darker hover:bg-primary-darkest" />
          </div>
          <div className="mt-32 2xl:mt-44">
            <ContactCard />
          </div>
        </div>
        <div className="w-1/2 pb-16 2xl:pb-10">
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
