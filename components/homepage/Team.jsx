import Image from 'next/image';

const Team = () => {
  return (
    <div className="bg-white py-36">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <h1 className="mx-auto px-10 text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:text-5xl xl:leading-tight">
          Our team
        </h1>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex justify-center space-x-10">
            <div className="">
              <Image src="/images/team/profile-1.jpg" width={210} height={201} />
              <div className="mt-4 text-base font-bold">Firstname Surname</div>
              <div className="text-sm">Founder, CEO</div>
            </div>
            <div className="">
              <Image src="/images/team/profile-2.jpg" width={210} height={201} />
              <div className="mt-4 text-base font-bold">Firstname Surname</div>
              <div className="text-sm">Founder, CEO</div>
            </div>
            <div className="">
              <Image src="/images/team/profile-3.jpg" width={210} height={201} />
              <div className="mt-4 text-base font-bold">Firstname Surname</div>
              <div className="text-sm">Founder, CEO</div>
            </div>
            <div className="">
              <Image src="/images/team/profile-4.jpg" width={210} height={201} />
              <div className="mt-4 text-base font-bold">Firstname Surname</div>
              <div className="text-sm">Founder, CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
