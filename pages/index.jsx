import About from '../components/homepage/About';
import Banner from '../components/homepage/Banner';
import Counter from '../components/homepage/Counter';
import Header from '../components/homepage/Header';
import Parallax from '../components/homepage/Parallax';
import Services from '../components/homepage/Services';
import SocialMedia from '../components/homepage/SocialMedia';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Parallax />
        <Counter />
        <Services title="Our services" />
        <Parallax type="jeans" />
        <About />
        <Services title="Benefits" />
        <SocialMedia />
        <Banner />
      </main>
    </div>
  );
}
