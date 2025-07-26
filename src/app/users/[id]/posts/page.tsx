"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { useUserPosts } from "@/hooks/useUserPosts";
import PostCard from "@/components/post-card";
import { useFetchUserProfile } from "@/hooks/fetchUserProfile";
import Loading from "@/components/loading";

export default function UserPostPage() {
  const { id } = useParams();
  const { user } = useFetchUserProfile();
  const { posts, loading, error } = useUserPosts(Number(id));

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            All{" "}
            <strong className="text-blue-400">
              {user?.id == id ? user?.nickname : "User"}
            </strong>{" "}
            Posts
          </h1>
        </div>
        {loading && <Loading />}
        {error && <p className="p-6 text-red-500">{error}</p>}
        {!loading && !error && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!posts.length ? (
              <p className="col-span-3 text-gray-500">No posts found.</p>
            ) : (
              posts.map((post) => <PostCard key={post.id} post={post} />)
            )}
          </section>
        )}
      </div>
    </div>
  );
}
