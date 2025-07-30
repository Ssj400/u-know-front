"use client";

import { useEffect, useState } from "react";
import type { UserStats } from "@/types/user";
import api from "@/lib/axios";

export function useFetchUsers() {
  const [users, setUsers] = useState<UserStats[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return { users };
}
