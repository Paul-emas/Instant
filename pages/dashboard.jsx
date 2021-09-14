import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';

export default function Dashboard() {
  return (
    <div className="fixed min-h-screen w-full">
      <div className="grid grid-cols-6">
        <div className="min-h-screen border-r col-span-1 pt-12 px-5 bg-primary-base">
          <Image
            src="/images/logo-light.png"
            width={181.42}
            height={34.95}
            className="object-contain"
          />
        </div>
        <div className="flex min-h-full col-span-4 bg-primary-light">
          <div className="container xl:px-5 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-heading font-extrabold">Buy Electricity</h1>
                <p className="text-md font-medium text-font-muted">
                  Never have interrupted power supply, making life easy.
                </p>
              </div>
              <Button>Buy Electricity</Button>
            </div>
          </div>
        </div>
        <div className="min-h-screen border-l col-span-1 bg-white"></div>
      </div>
    </div>
  );
}
