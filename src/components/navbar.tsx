import Button from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-transparentk">
      <h1 className="text-3xl font-bold">Uknow</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Button href="/auth/login" className="text-lg hover:text-blue-400 transition-colors bg-gray-200 text-black px-4 py-2 rounded-md">
              Sign up
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}