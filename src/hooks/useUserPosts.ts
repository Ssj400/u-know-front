import { useState, useEffect } from "react";
import { Post } from "@/types/post";
import api from "@/lib/axios";

export const useUserPosts = (userId: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!userId) return;
      try {
        setLoading(true);
        const res = await api.get(`users/${userId}/posts`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch user posts:", err);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return { posts, loading, error };
};
