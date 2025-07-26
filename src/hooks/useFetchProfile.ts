import api from "@/lib/axios";
import { UserStats } from "@/types/user";
import { useEffect, useState } from "react";


export function useFetchUserProfile(userId: string) {
  const [user, setUser] = useState<UserStats | null>(null);

  

  useEffect(() => {
    async function fetchUserProfile() {
    try {
      const { data } = await api.get(`/users/profile/${userId}/`);
      setUser(data);
    } catch (error) {
      setUser(null);
        console.error("Failed to fetch user profile:", error);
    }
  }

    fetchUserProfile();
}, [userId]);

  return { user, refetch: useFetchUserProfile };
}