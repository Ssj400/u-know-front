"use client";

import { useParams } from "next/navigation";
import api from "@/lib/axios";
import { Post } from "@/types/post";
import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import AddComment from "@/components/comments/add-comment";
import Comment from "@/components/comments/comment";
import { Comments } from "@/types/comment";
import { useFetchCurrentUserProfile } from "@/hooks/useFetchCurrentUserProfile";
import Loading from "@/components/loading";

export default function CreatePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comments[]>([]);
  const { user } = useFetchCurrentUserProfile();

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await api.get(`/posts/${id}/comments`);
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

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
    fetchComments();
  }, [id]);

  const handleCommentAdded = (newComment: Comments) => {
    setComments((prevComments) => [ newComment, ...prevComments]);
  };

  if (!post) {
    return <p className="p-6 text-red-500">Post not found</p>;
  }

  const formattedDate = new Date(post?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full bg-gray-900 min-h-screen">
      <Navbar />
     
      <div className="p-6 max-w-3xl mx-auto">
        <div
          className="animate-fade-in-slide-up"
          style={{ animationDelay: "100ms" }}
        >
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
              className="mt-4 text-sm text-indigo-600 hover:underline cursor-pointer"
            >
              Back
            </button>
            {user?.id === post.author.id && (
              <>
              <button
                onClick={() => window.location.href = `/main/posts/${post.id}/edit`}
                className="mt-4 text-sm text-indigo-600 hover:underline ml-4 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this post?")) {
                    api.delete(`/posts/${post.id}`).then(() => {
                      window.location.href = "/main/posts";
                    });
                  }
                }}
                className="mt-4 text-sm text-red-600 hover:underline ml-4 cursor-pointer"
              >
                Delete
              </button>
              </>
            )}
          </Card>
        </div>
        <div
          className="mt-8 animate-fade-in-slide-up"
          style={{ animationDelay: "200ms" }}
        >
           {loading && <Loading />}
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <AddComment onCommentAdded={handleCommentAdded} />
          <br className="my-4" />
          {comments.map((comment: Comments) => {
            return <Comment key={comment.id} {...comment} />;
          })}
        </div>
      </div>
    </div>
  );
}

