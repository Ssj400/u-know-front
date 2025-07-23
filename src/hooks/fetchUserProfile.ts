"use client"
import { useState, useEffect } from "react";
import api from "@/lib/axios";
import { UserStats } from "@/types/user";

export function useFetchUserProfile() {
  const [user, setUser] = useState<UserStats | null>(null);

  async function fetchUserProfile() {
    try {
      const { data } = await api.get("/users/profile");
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return { user, refetch: fetchUserProfile };
}
