import PeopleGroupIcon from '../../public/svgs/people-group.svg';

const People = () => {
  return (
    <div className="py-32 bg-primary-base bg-cover overlay">
      <div className="container px-10 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <PeopleGroupIcon className="mx-auto" />
          <h1 className="text-white font-gill font-semibold text-6xl mt-4">
            What they say about us
          </h1>
          <p className="text-white mt-6 max-w-2xl mx-auto">
            Move your products to your customers at your will and convivence go
            about your business continently the modern way
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
