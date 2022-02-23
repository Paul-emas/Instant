import { useDispatch } from 'react-redux';
import { setInitAuthentication } from '../slices/user';

import PrimaryButton from '../components/Buttons/PrimaryButton';
import AboutBanner from '../components/homepage/AboutBanner';
import AboutInfo from '../components/homepage/AboutInfo';
import Header from '../components/homepage/Header';
import Recycle from '../components/homepage/Recycle';
import Team from '../components/homepage/Team';
import FAQs from '../components/homepage/FAQs';
import Footer from '../components/homepage/Footer';

export default function About() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header bg="banner-4">
        <div className="justify-between lg:flex 2xl:mt-5">
          <div className="pt-28 lg:w-1/2 lg:pt-60">
            <div className="max-w-lg text-center text-2xl font-bold leading-tight text-white lg:text-left lg:text-6xl xl:leading-tight">
              We make energy accessible & affordable
            </div>
            <p className="mt-2 max-w-lg text-gray-400">
              Get in touch with us by filling up the form and our team will get back to you within
              24 hours. Lorem ipsum dolor sit amet.
            </p>
            <div className="mt-5 w-56">
              <PrimaryButton onClick={() => dispatch(setInitAuthentication('register'))}>
                Get Started
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Header>
      <Recycle />
      <AboutBanner />
      <Team />
      <AboutInfo />
      <FAQs />
      <Footer />
    </div>
  );
}
