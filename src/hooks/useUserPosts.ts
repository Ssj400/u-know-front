import { useState, useEffect } from "react";
import { Post } from "@/types/post";
import api from "@/lib/axios";

export const useUserPosts = (userId: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const numericUserId = Number(userId);
    if (isNaN(numericUserId)) {
      setError("Invalid user ID");
      setLoading(false);
      return;
    }

    const fetchPosts = async () => {
      if (!numericUserId) return;

      try {
        setLoading(true);
        const res = await api.get(`users/${numericUserId}/posts`);
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
