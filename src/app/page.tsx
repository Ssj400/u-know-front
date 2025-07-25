import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import FeatureBox from "@/components/feature-box";
import StepBox from "@/components/steps-box"
import AuthRedirect from "@/components/auth/auth-redirect";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-foreground overflow-x-hidden">
      <AuthRedirect />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-white">
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-6 h-auto md:h-[75vh]">
          <div className="flex flex-col items-start max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Discover a world of knowledge --join our vibrant community!
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Your platform for sharing and discovering knowledge.
            </p>
            <Link
              href="/auth/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors self-center md:self-start"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-96 bg-transparent-700 rounded-lg flex items-center justify-center text-gray-300 text-2xl mt-6 md:mt-0 md:ml-6">
            <Image
              src="/cat-logo.png"
              alt="Landing Image"
              width="500"
              height="400"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/landing-image.jpg"
            alt="Landing Image"
            width={2000}
            height={600}
            sizes="100vw"
            className="object-cover w-full"
          />
        </div>
      </main>

      <section className="bg-transparent text-white p-8 flex flex-col items-center justify-center mt-10 md:mt-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start max-w-xl gap-5">
            <p className="text-gray-300">Connect</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Explore our unique platform features
            </h2>
          </div>

          <p className="text-lg mb-6 w-full max-w-2xl text-gray-300 mt-6 md:mt-0">
            Our platform empowers users to share knowledge effortlessly. Connect
            with like-minded individuals and engage in meaningful discussions.
            Discover a wealth of content tailored to your interests.
          </p>
        </div>
        <div
          className="w-full flex flex-col md:flex-row items-center justify-around gap-4 mt-10 md:mt-12"
        >
          <FeatureBox
            imageSrc="/share.jpg"
            title="Share Knowledge made easy"
            description="Easily share your insights and expertise with others."
          />
          <FeatureBox
            imageSrc="/explore.jpg"
            title="Explore Topics & Learn"
            description="Discover a wide range of topics and learn from experts."
          />
          <FeatureBox
            imageSrc="/connect.jpg"
            title="Connect & Discuss"
            description="Engage with a vibrant community and discuss ideas."
          />
        </div>
      </section>

      <section className="bg-transparent text-white p-8 flex flex-col items-center justify-center mt-10 md:mt-12">
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover the power of shared knowledge</h2>
          <p
            className="text-lg mb-6 max-w-2xl text-gray-300"
          >
            Become part of a thriving community where knowledge is shared and
            ideas flourish. Sign up today to start your journey with us.
          </p>
          <Link
            href="/auth/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Sign Up Now
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-4 mt-10 md:mt-24">
          <StepBox
          title="Step 1: Sign up for free"
          description="Create your accounts in just a few clicks"
          />
           <StepBox
          title="Step 2: Define your preferences"
          description="Answer a few questions to let us know how to give you the best experience"
          />
           <StepBox
          title="Step 3: Explore, learn and share your thinking"
          description="Enjoy all our features and connect with others!"
          />
        </div>
        <div className="w-full flex justify-center items-center gap-6 mt-10 md:mt-20">
          <Link href="/auth/register" className="py-3 px-6 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition-colors">
            Join
          </Link>
          <Link href="/explore" className="py-3 px-6 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            Explore
          </Link>
        </div>
      </section>

      <footer className="p-6 bg-black-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Uknow. All rights reserved.</p>
      </footer>
    </div>
  );
}
