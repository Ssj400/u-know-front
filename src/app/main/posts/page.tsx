"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Post } from "@/types/post";
import PostCard from "@/components/post-card";
import Navbar from "@/components/navbar";
import AddPostButton from "@/components/add-post-button";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await api.get("/posts");
      setPosts(res.data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All Posts</h1>
          <select className="bg-gray-800 text-white p-2 rounded" name="categoryId"
            id="categoryId"
            required
            >
            <option value="" disabled>
              Select a category
            </option>
          </select>
        
          <AddPostButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
