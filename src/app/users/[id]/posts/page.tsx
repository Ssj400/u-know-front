"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import { useParams } from 'next/navigation';
import { useUserPosts } from '@/hooks/useUserPosts';
import PostCard from '@/components/post-card';


export default function UserPostPage() {
    const { id } = useParams();

    const { posts, loading, error } = useUserPosts(Number(id));

    if (loading) return <p className="p-6 text-gray-500">Loading...</p>;
    if (error) return <p className="p-6 text-red-500">{error}</p>;

    return (
            <div className="bg-gray-900 min-h-screen">
                <Navbar />
                <section className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center h-[calc(100vh-100px)]">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </section>
            </div>
    );
}

          