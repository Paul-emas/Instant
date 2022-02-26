import TreesIcon from '../../public/svgs/trees.svg';

const Recycle = (props) => {
  return (
    <div className="bg-white py-14 lg:py-36">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <div className="mx-auto flex max-w-3xl">
          <div className="hidden h-40 w-8 bg-primary-base lg:block"></div>
          <div className="lg:ml-10">
            <div className="text-center text-xl font-bold leading-tight text-primary-dark lg:text-left lg:text-5xl xl:leading-tight">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitred
            </div>
            <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
              At Instant Energy, we make Energy accessible and affordable in emerging, underserved
              markets across Nigeria and Africa by providing energy as a service platform and also
              facilitating access to clean renewable energy for residential and commercial clusters.
              We seek to catalyze energy access partnerships by everaging grants, concessionary
              finance from governments and mobilizing private sector investors interested in
              investing in energy assets
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-5xl outline-black lg:mt-36">
          <div className="items-center lg:flex lg:space-x-20">
            <div>
              <TreesIcon width="506" height="418" className="hidden lg:block" />
              <TreesIcon height="327.154" className="block w-full lg:hidden" />
            </div>
            <div>
              <div className="text-center text-xl font-bold leading-tight text-primary-dark lg:text-left lg:text-5xl xl:leading-tight">
                Lorem ipsum dolor sit amet, consetetur
              </div>
              <p className="mt-4 text-center text-sm lg:text-left lg:text-base">
                At Instant Energy, we make Energy accessible and affordable in emerging, underserved
                markets across Nigeria and Africa by providing energy as a service platform and also
                facilitating access to clean renewable energy for residential and commercial
                clusters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recycle;
