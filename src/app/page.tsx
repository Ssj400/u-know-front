import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import FeatureBox from "@/components/feature-box";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center00 text-white">
        <div className="flex-grow flex flex-row items-center justify-center p-6 h-[75vh]">
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
              width="500"
              height="400"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
          <Image
            src="/landing-image.jpg"
            alt="Landing Image"
            width="2000"
            height="600"
            sizes="(max-width: 768px) 100vw, Min(100vw, 2000px)"
            className="object-cover rounded-lg"
          />
        
      </main>

      <section className="bg-transparent text-white p-8  flex flex-col items-center justify-center mt-30">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col items-start max-w-xl gap-5">
            <p className="text-gray-300">Connect</p>
            <h2 className="text-5xl font-bold mb-4 ">Explore our unique platform features</h2>
          </div>
          
          <p className="text-lg mb-6 w-full max-w-2xl text-gray-300">
           Our platform empowers users to share knowledge effortlessly. Connect with like-minded individuals and engage in meaningful discussions. Discover a wealth of content tailored to your interests.
          </p>
        </div>
        <div id="HERE" className="w-full flex flex-row items-center justify-around gap-4 mt-30">
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

      <footer className="p-6 bg-black-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Uknow. All rights reserved.</p>
      </footer>
    </div>
  );
}
