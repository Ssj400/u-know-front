import Link from 'next/link';

export default function SignUpButton() {
  return (
    <Link
      href="/auth/login"
      className="text-lg hover:text-blue-400 transition-colors bg-gray-200 text-black px-4 py-2 rounded-md"
    >
      Sign up
    </Link>
  );
}