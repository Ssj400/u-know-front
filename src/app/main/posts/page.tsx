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
    <div>
      <Navbar></Navbar>
      <div className="p-6 space-y-4">
        <AddPostButton />
        <h1 className="text-2xl font-bold">All Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
