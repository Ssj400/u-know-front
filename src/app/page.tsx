import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow flex flex-row items-center justify-between p-6">
        <div className="flex flex-col items-start max-w-xl">
          <h2 className="text-5xl font-extrabold mb-4 text-left">
            Discover a world of knowledge --join our vibrant community!
          </h2>
          <p className="text-xl mb-8 text-left">
            Your platform for sharing and discovering knowledge.
          </p>
          <Link
            href="/auth/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
        <div className="w-1/2 h-96 bg-transparent-700 rounded-lg flex items-center justify-center text-gray-300 text-2xl ml-6">
          <Image
            src="/cat-logo.png"
            alt="Landing Image"
            width={500}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </main>

      <footer className="p-6 bg-black-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Uknow. All rights reserved.</p>
      </footer>
    </div>
  );
}
