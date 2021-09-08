import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className="bg-transparent h-20 fixed inset-0">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            width={200}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
