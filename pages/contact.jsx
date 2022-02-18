import Head from 'next/head';
import Header from '../components/homepage/Header';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
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
      <Header>
        <div className="justify-between lg:flex">
          <div className="max-w-3xl border-2 border-black pt-36 sm:top-20 lg:w-1/2">
            <div className="text-5xl font-bold leading-tight">
              Get in touch, {`we'll`} love to hear from you
            </div>
          </div>
          <div className="mx-auto flex items-center pb-16 outline-black md:max-w-lg lg:w-1/2 lg:max-w-full 2xl:pb-10">
            <ContactForm />
          </div>
        </div>
      </Header>
    </div>
  );
}
