import TreesIcon from '../../public/svgs/trees.svg';

const Recycle = (props) => {
  return (
    <div className="bg-white py-36">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <div className="mx-auto flex max-w-3xl">
          <div className="h-40 w-8 bg-primary-base"></div>
          <div className="ml-10">
            <div className="text-5xl font-bold leading-tight text-primary-dark xl:leading-tight">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitred
            </div>
            <p className="mt-4">
              At Instant Energy, we make Energy accessible and affordable in emerging, underserved
              markets across Nigeria and Africa by providing energy as a service platform and also
              facilitating access to clean renewable energy for residential and commercial clusters.
              We seek to catalyze energy access partnerships by everaging grants, concessionary
              finance from governments and mobilizing private sector investors interested in
              investing in energy assets
            </p>
          </div>
        </div>
        <div className="mx-auto mt-36 max-w-5xl outline-black">
          <div className="flex items-end space-x-20">
            <div>
              <TreesIcon />
            </div>
            <div>
              <div className="text-5xl font-bold leading-tight text-primary-dark xl:leading-tight">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred
              </div>
              <p className="mt-4">
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
