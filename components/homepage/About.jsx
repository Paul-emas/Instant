import React from 'react';
import Image from 'next/image';

const About = () => (
  <section className="py-24">
    <div className="container mx-auto xl:px-10">
      <div className="flex w-full justify-between items-center">
        <div className="2xl:hidden">
          <Image
            src="/images/man.png"
            width={481}
            height={534}
            className="object-cover"
          />
        </div>
        <div className="hidden 2xl:block">
          <Image
            src="/images/man.png"
            width={700}
            height={720}
            className="object-cover"
          />
        </div>
        <div className="max-w-xl">
          <h1 className="text-5xl leading-tight text-font-darker">
            Be comfortable as you move around the city anytime, anyday.
          </h1>
          <p className="text-font-dark mt-3">
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.{' '}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
