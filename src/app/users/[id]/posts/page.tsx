"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { useUserPosts } from "@/hooks/useUserPosts";
import PostCard from "@/components/post-card";
import { useFetchUserProfile } from "@/hooks/fetchUserProfile";

export default function UserPostPage() {
  const { id } = useParams();
  const { user } = useFetchUserProfile();
  const { posts, loading, error } = useUserPosts(Number(id));

  if (loading) return <p className="p-6 text-gray-500">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All <strong className="text-blue-400">{user?.nickname}</strong> Posts</h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </div>
    </div>
  );
}
