import api from "@/lib/axios";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";

export function useFetchPosts(): {
  posts: Post[];
  error: string | null;
  loading: boolean;
} {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const { data } = await api.get("/posts");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again later.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, error, loading };
}
