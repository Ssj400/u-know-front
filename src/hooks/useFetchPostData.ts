import api from "@/lib/axios";
import { PostForm } from "@/types/post";
import { useEffect, useState } from "react";

export function useFetchPostData(postId: number): {
  post: PostForm | null;
  loading: boolean;
  error: string | null;
} {
  const [post, setPost] = useState<PostForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        setError("Failed to fetch post data.");
        console.error("Error fetching post data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  return { post, loading, error };
}
