import Navbar from '../layout/Navbar';

const Header = ({ children, bg }) => (
  <>
    <Navbar />
    <header
      className={`${
        !bg ? 'bg-primary-light' : 'banner'
      } min-h-screen overflow-hidden`}>
      <div className="xl:container mx-auto px-6 xl:px-10">
        <div className="flex w-full min-h-screen justify-between">
          {children}
        </div>
      </div>
    </header>
  </>
);

export default Header;
