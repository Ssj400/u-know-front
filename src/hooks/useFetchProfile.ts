import api from "@/lib/axios";
import { UserStats } from "@/types/user";
import { useEffect, useState } from "react";

export function useFetchUserProfile(userId: string) {
  const [user, setUser] = useState<UserStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUserProfile() {
      setLoading(true);
      try {
        const { data } = await api.get(`/users/profile/${userId}/`);
        setUser(data);
      } catch (error) {
        setUser(null);
        console.error("Failed to fetch user profile:", error);
        setError("Failed to fetch user profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchUserProfile();
  }, [userId]);

  return { user, refetch: useFetchUserProfile, error, loading };
}
