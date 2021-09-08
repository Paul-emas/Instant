import { Navbar } from '../components/layout/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="min-h-screen bg-primary-light">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-2">
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </header>
    </div>
  );
}
