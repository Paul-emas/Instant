import Navbar from '../layout/Navbar';

const Header = ({ children }) => (
  <div>
    <Navbar />
    <header className="min-h-screen bg-primary-light overflow-hidden">
      <div className="xl:container mx-auto px-6 xl:px-10">
        <div className="flex w-full min-h-screen justify-between">
          {children}
        </div>
      </div>
    </header>
  </div>
);

export default Header;
