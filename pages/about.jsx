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
import ContactCard from '../components/ContactCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Goals from '../components/homepage/Goals';

export default function About() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header bg="banner-4 bg-red pt-80 lg:pt-0 bg-center lg:bg-left bg-cover pb-10">
        <div className="justify-between lg:flex 2xl:mt-5">
          <div className="pt-28 lg:w-1/2 lg:pt-60">
            <div className="max-w-lg text-center text-2xl font-bold leading-tight text-white lg:text-left lg:text-6xl xl:leading-tight">
              We make <span className="text-green-500">energy</span> accessible <br className="block lg:hidden" /> &
              affordable
            </div>
            <div className="mt-8 lg:w-56">
              <PrimaryButton onClick={() => dispatch(setInitAuthentication('register'))}>Get Started</PrimaryButton>
              <PrimaryButton
                onClick={() => dispatch(setInitAuthentication('login'))}
                className="mt-5 block lg:hidden"
                transparent
              >
                Login
              </PrimaryButton>

              <div className="relative mt-6 flex items-center justify-center lg:hidden">
                <div className="flex h-6 w-6 items-center rounded-full bg-secondary-green text-center text-white">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mx-auto h-2 w-2 text-xl" />
                </div>
                <div className="ml-2">
                  <p className="text-xxs text-gray-400">Need help?</p>
                  <p className="-mt-1 text-xs font-bold text-white">090-8233-3376</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Recycle />
      {/* <AboutBanner /> */}
      {/* <Team /> */}
      <AboutInfo />
      <Goals />
      {/* <FAQs /> */}
      <Footer />
    </div>
  );
}
