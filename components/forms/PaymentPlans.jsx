import React from 'react';

const PaymentPlans = () => {
  return (
    <div className="py-16 sm:py-44">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="sm:max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 space-y-5 sm:space-x-16">
            <div className="px-5 sm:px-0 text-center">
              <div className="text-xl sm:text-5xl text-primary-darker font-bold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred
              </div>
              <p className="mt-5 max-w-md text-sm sm:text-base">
                At Instant Energy, we make Energy accessible and affordable in
                emerging, underserved markets across Nigeria and Africa by
                providing energy as a service platform and also facilitating
                access to clean renewable energy for residential and commercial
                clusters.
              </p>
            </div>
            <div>
              <img
                src="/images/groups.webp"
                alt="Instant energy payment methods"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlans;
