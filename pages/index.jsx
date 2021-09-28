import Header from '../components/homepage/Header';
import Partners from '../components/homepage/Partners';
import UserServices from '../components/homepage/UserServices';
import BuyElectricity from '../components/homepage/BuyElectricity';
import Plans from '../components/homepage/Plans';
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
      <Header />
      <main>
        <Partners bottom={true} />
        <UserServices />
        <BuyElectricity />
        <BuyElectricity
          title="Never run of power with solar electricity"
          iconText="Solar electricity"
          cta="Request Solar"
          alignRight
        />
        <Plans />
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
