import Head from 'next/head';

import Header from '../components/homepage/Header';
import ContactCard from '../components/ContactCard';
import UserServices from '../components/homepage/UserServices';
import BulbIcon from '../public/svgs/bulb.svg';
import Plans from '../components/homepage/Plans';
import Manage from '../components/homepage/Manage';
import ChoosePlans from '../components/homepage/ChoosePlans';
import Counter from '../components/homepage/Counter';
import People from '../components/homepage/People';
import Slider from '../components/homepage/Slider';
import CTA from '../components/homepage/CTA';
import Footer from '../components/homepage/Footer';

import SolarIcon from '../public/svgs/solar-house.svg';

export default function solarPlans() {
  const steps = [
    {
      name: 'Start a solar plan',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
    {
      name: 'First payment & solar installation',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
    {
      name: 'Lease to own',
      caption:
        'Tell us what you like to send and let us know when we can come.',
      icon: BulbIcon,
    },
  ];

  return (
    <div>
      <Head>
        <title>Instant Energy - Buy Solar Electricity Units in Nigeria</title>
        <meta
          name="description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        />
        <meta
          property="og:description"
          content="Instant Energy - Buy Electrical Units in Nigeria"
        />
        {/* <meta property="og:url" content="localhost:3000" /> */}
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div className="relative w-1/2 pt-52 2xl:pt-72">
          <div className="max-w-xl">
            <h1 className="text-6xl leading-tight xl:leading-tight 2xl:leading-tight font-extrabold text-font-darker ">
              Never run of power with solar electricity
            </h1>
            <p className="text-font-dark text-xl leading-normal mt-6">
              Instant Energy deploys patient, value accretive capital alongside
              international and local value investors to create.
            </p>
            <div className="px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm lg:max-w-md mt-8 lg:mt-10">
              <a
                href="/"
                className="py-5 rounded-xl uppercase bg-primary-base border-2  border-primary-base text-white text-center text-sm font-bold"
              >
                Request solar
              </a>
              <a
                href="/"
                className="py-5 rounded-xl uppercase border-2 border-primary-darker bg-primary-light text-primary-darker text-center text-sm font-bold"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="mt-16 2xl:mt-36">
            <ContactCard />
          </div>
        </div>
        <div className="w-1/2 pt-40 2xl:pt-72 relative ">
          <div className="transform 2xl:scale-125 flex justify-end relative 2xl:-left-20">
            <SolarIcon />
          </div>
        </div>
      </Header>
      <UserServices title="How to start a solar plan" stepArr={steps} />
      <Plans gray />
      <Manage />
      <ChoosePlans />
      <Counter />
      <People />
      <Slider />
      <CTA />
      <Footer />
    </div>
  );
}
