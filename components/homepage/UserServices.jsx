import BulbIcon from '../../public/svgs/bulb.svg';

const UserServices = () => {
  return (
    <div className="py-20">
      <div className="container px-10 mx-auto">
        <h1 className="text-5xl font-bold max-w-xl text-center mx-auto font-gill">
          Easy steps to recharge your meter
        </h1>
        <div className="flex justify-center mt-24">
          <div className="max-w-xs">
            <BulbIcon className="mx-auto" />
            <div className="text-center mt-7">
              <h2 className="font-gill text-xl">Add your meter</h2>
              <p className="text-sm px-5 mt-2">
                Tell us what you like to send and let us know when we can come.
              </p>
            </div>
          </div>
          <div className="max-w-xs">
            <BulbIcon className="mx-auto" />
            <div className="text-center mt-7">
              <h2 className="font-gill text-xl">Add your meter</h2>
              <p className="text-sm px-5 mt-2">
                Tell us what you like to send and let us know when we can come.
              </p>
            </div>
          </div>
          <div className="max-w-xs">
            <BulbIcon className="mx-auto" />
            <div className="text-center mt-7">
              <h2 className="font-gill text-xl">Add your meter</h2>
              <p className="text-sm px-5 mt-2">
                Tell us what you like to send and let us know when we can come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserServices;
