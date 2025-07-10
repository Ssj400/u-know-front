import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-6 bg-transparent">
      <div className="flex-1">
        <h1 className="text-3xl font-bold bg-transparent">Uknow</h1>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-30">
          <li>
            <Link href="/" className="text-lg hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-blue-400 transition-colors">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-end">
        <Link
          href="/auth/login"
          className="text-lg hover:text-blue-400 transition-colors bg-gray-200 text-black px-4 py-2 rounded-md"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}