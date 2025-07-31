"use client";
import { useState, useEffect } from "react";
import api from "@/lib/axios";
import { UserStats } from "@/types/user";
import Cookies from "js-cookie";

export function useFetchCurrentUserProfile() {
  const [user, setUser] = useState<UserStats | null>(null);

  async function fetchCurrentUserProfile() {
    try {
      const { data } = await api.get("/users/profile");
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      fetchCurrentUserProfile();
    }
  }, []);

  return { user, refetch: fetchCurrentUserProfile };
}
