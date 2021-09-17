import PropTypes from 'prop-types';

import ContactCard from '../ContactCard';
import PhoneIcon from '../../public/svgs/phone.svg';

const Services = ({ title }) => (
  <section className="py-16 2xl:py-24">
    <div className="container mx-auto xl:px-10">
      <div className="flex justify-between w-full">
        <h1 className="text-5xl leading-tight text-font-darker">{title}</h1>
        <ContactCard />
      </div>

      <div className="grid grid-cols-3 mt-24">
        <div className="group pt-12 pb-16 px-10 hover:shadow-soft hover:bg-primary-light max-w-sm rounded-3xl">
          <PhoneIcon />
          <h1 className="mt-5 text-2xl group-hover:text-font-green text-font-dark font-bold">
            Electricity Units
          </h1>
          <p className="text-font-dark mt-3">
            Instant Energy deploys patient, value accretive capital alongside
            international and local value investors to create.
          </p>
        </div>
        <div className="group pt-12 pb-16 px-10 hover:shadow-soft hover:bg-primary-light max-w-sm rounded-3xl">
          <PhoneIcon />
          <h1 className="mt-5 text-2xl group-hover:text-font-green text-font-dark font-bold">
            Electricity Units
          </h1>
          <p className="text-font-dark mt-3">
            Instant Energy deploys patient, value accretive capital alongside
            international and local value investors to create.
          </p>
        </div>
        <div className="group pt-12 pb-16 px-10 hover:shadow-soft hover:bg-primary-light max-w-sm rounded-3xl">
          <PhoneIcon />
          <h1 className="mt-5 text-2xl group-hover:text-font-green text-font-dark font-bold">
            Electricity Units
          </h1>
          <p className="text-font-dark mt-3">
            Instant Energy deploys patient, value accretive capital alongside
            international and local value investors to create.
          </p>
        </div>
      </div>
    </div>
  </section>
);
('');
Services.defaultProps = {
  title: '',
};

Services.propTypes = {
  title: PropTypes.string,
};

export default Services;
