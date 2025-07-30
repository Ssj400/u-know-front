"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { useFetchUserPosts } from "@/hooks/useFetchUserPosts";
import PostCard from "@/components/post-card";
import Loading from "@/components/loading";
import { useFetchUserProfile } from "@/hooks/useFetchProfile";

export default function UserPostPage() {
  const { id } = useParams();
  const { user } = useFetchUserProfile(String(id));
  const { posts, loading: usersPostLoading, error: usersPostError } = useFetchUserPosts(String(id));

  if (!user) {
    return <p className="p-6 text-red-500">User not found</p>;
  }
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      {usersPostLoading && <Loading />}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            All{" "}
            <strong className="text-blue-400">
              {user?.nickname}
            </strong>{" "}
            Posts
          </h1>
        </div>
        {usersPostError && <p className="p-6 text-red-500">Error getting user posts</p>}
        {!usersPostLoading && !usersPostError && (
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
