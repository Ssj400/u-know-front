import Link from 'next/link';
import InfoButton from '@/components/ui/info-button/info-button';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-6 bg-transparent border-b border-gray-200 border-w-200">
      <div className="flex-1">
        <h1 className="text-3xl font-bold bg-transparent">Uknow</h1>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-30">
          <li>
            <Link href="/main/dashboard" className="text-lg hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/main/posts" className="text-lg hover:text-blue-400 transition-colors">
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
        <InfoButton />
      </div>
    </header>
    
  );
}