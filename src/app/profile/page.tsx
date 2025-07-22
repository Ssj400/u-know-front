import Navbar from "@/components/navbar";
import EditProfile from "@/components/profile/edit-profile";



export default function ProfilePage() {
  return (
    <div className="bg-gray-900 min-h-screen">
        <Navbar />
      <section className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center h-[calc(100vh-100px)]">
        <EditProfile />
      </section>
      
    </div>
  );
}