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
                setStats(res.data);
            } catch (error) {
                console.error("Error getting user Stats:", error);
            }
        };

        fetchData();
    }, []);

    if (!stats)
        return (
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center min-h-[180px]">
                <span className="animate-spin mr-2 h-5 w-5 border-4 border-blue-400 border-t-transparent rounded-full inline-block"></span>
                <span className="text-gray-500">Loading summary...</span>
            </div>
        );

    const date = new Date(stats.createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mr-3">
                    {stats.nickname.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h2 className="text-2xl font-bold">{stats.nickname}</h2>
                    <p className="text-sm text-gray-500">Member since {date}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-3 flex flex-col items-center shadow">
                    <span className="text-blue-600 font-semibold text-lg">{stats.posts.length}</span>
                    <span className="text-xs text-gray-500">Posts</span>
                </div>
                <div className="bg-white rounded-lg p-3 flex flex-col items-center shadow">
                    <span className="text-blue-600 font-semibold text-lg">{stats.comments.length}</span>
                    <span className="text-xs text-gray-500">Comments</span>
                </div>
            </div>
        </div>
    );
}