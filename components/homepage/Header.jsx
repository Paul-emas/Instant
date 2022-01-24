import Navbar from '../layout/Navbar';

const Header = ({ children, bg }) => (
  <>
    <Navbar />
    <header
      className={`${
        !bg ? 'bg-primary-light' : 'banner'
      } overflow-hidden pb-10 lg:pb-0`}
    >
      <div className="xl:container mx-auto px-3 xl:px-14">
        <div className="lg:flex w-full justify-between">{children}</div>
      </div>
    </header>
  </>
);

export default Header;
