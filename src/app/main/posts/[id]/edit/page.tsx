"use client";
import EditPostForm from "@/components/edit-post-form";
import Navbar from "@/components/navbar";

export default function EditPostPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
        <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Edit Post
        </h1>
        <div className="max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-md border border-gray-800">
          <EditPostForm />
        </div>
      </div>
    </div>
  );
}
