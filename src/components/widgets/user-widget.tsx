'use client'

import api from "@/lib/axios";
import { UserStats } from "@/types/user";
import { useEffect, useState } from "react";

export default function UserWidget() {
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await api.get(`/users/profile`);
            setStats(res.data)
        } catch (error) {
            console.error("Error getting user Stats:", error)
        }
    }

    fetchData();
  }, [])

  if (!stats) return <p>Loading summary...</p>;
  const date = new Date(stats.createdAt).toLocaleString();

  return (
    <div className="bg-white p-4 rounded-lg shadow text-black">
      <h2 className="text-xl font-semibold mb-2">Your activity</h2>
      <p><strong>Name:</strong> {stats.nickname}</p>
      <p><strong>Member since:</strong> {date}</p>
      <p><strong>Posts created:</strong> {stats.posts.length}</p>
      <p><strong>Comments made:</strong> {stats.comments.length}</p>
    </div>
  );
}