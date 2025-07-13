"use client";
import CreatePostForm from "@/components/create-post-form";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

export default function CreatePostPage() {
  useAuthRedirect();

  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Create a New Post
        </h1>
        <div className="max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-md border border-gray-800">
          <CreatePostForm />
        </div>
      </div>
    </div>
  );
}
