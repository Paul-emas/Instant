import React from 'react';

const PaymentPlans = () => {
  return (
    <div className="py-44">
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 space-x-16">
            <div>
              <div className="text-5xl text-primary-darker font-bold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred
              </div>
              <p className="mt-5 max-w-md">
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
