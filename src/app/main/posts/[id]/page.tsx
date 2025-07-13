"use client";

import { useParams } from "next/navigation";
import api from "@/lib/axios";
import { Post } from "@/types/post";
import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

export default function CreatePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }
  if (!post) {
    return <p className="p-6 text-red-500">Post not found</p>;
  }

  const formattedDate = new Date(post?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full">
        <Navbar></Navbar>
      <div className="p-6 max-w-3xl mx-auto">
        <Card className="p-6 border border-gray-200 shadow-md">
          <div className="text-sm text-gray-500 flex justify-between ">
            <span className="text-indigo-600 font-medium">
              {post.category.name}
            </span>
            <span>{formattedDate}</span>
          </div>
          <h1 className="text-2xl font-bold mt-2">{post.title}</h1>

          <p className="text-gray-500 mt-4 whitespace-pre-line">
            {post.content}
          </p>

          <p className="mt-6 text-sm text-gray-700">
            By {post.author.nickname} on {formattedDate}
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 text-sm text-indigo-600 hover:underline"
          >
            Back
          </button>
        </Card>
      </div>
    </div>
  );
}
