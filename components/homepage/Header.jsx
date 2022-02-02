import Navbar from '../layout/Navbar';

const Header = ({ children, bg }) => (
  <>
    <Navbar />
    <header
      className={`${
        !bg ? 'bg-primary-light' : 'banner'
      } pb-10  lg:overflow-hidden lg:pb-0`}
    >
      <div className="mx-auto px-3 lg:h-banner xl:container xl:px-14">
        <div className="w-full">{children}</div>
      </div>
    </header>
  </>
);

export default Header;
