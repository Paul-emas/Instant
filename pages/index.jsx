import Header from '../components/homepage/Header';
import Partners from '../components/homepage/Partners';
import UserServices from '../components/homepage/UserServices';
import BuyElectricity from '../components/homepage/BuyElectricity';
import Plans from '../components/homepage/Plans';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Partners />
        <UserServices />
        <BuyElectricity />
        <BuyElectricity
          title="Never run of power with solar electricity"
          iconText="Solar electricity"
          cta="Request Solar"
          alignRight
        />
        <Plans />
      </main>
    </div>
  );
}
