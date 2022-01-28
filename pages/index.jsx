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
import PaymentPlans from '../components/forms/PaymentPlans';
import Buy from '../components/homepage/Buy';

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
        <div className="relative top-16 max-w-3xl sm:top-20 lg:w-1/2">
          <Image
            src="/images/woman.webp"
            layout="intrinsic"
            width={738}
            height={910}
            className="object-contain"
            priority
          />
        </div>
        <div className="mx-auto flex items-center pb-16 md:max-w-lg lg:w-1/2 lg:max-w-full 2xl:pb-10">
          <QuickPay />
        </div>
      </Header>
      <main>
        <Partners />
        <UserServices />
        <HomeBanners />
        <PaymentPlans />
        <Buy />
        <Counter />
        <DownloadApp />
        <Partners />
        <Footer />
      </main>
    </div>
  );
}
