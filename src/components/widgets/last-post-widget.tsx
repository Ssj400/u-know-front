'use client';

import React, { useEffect } from 'react';
import { Post } from '@/types/post';
import PostCard from '@/components/post-card';
import api from '@/lib/axios';
import { useFetchCurrentUserProfile } from '@/hooks/fetchCurrentUserProfile';

export const LastPostWidget = () => {
  const { user } = useFetchCurrentUserProfile();
  const [posts, setPosts] = React.useState<Post[]>([]);
  

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user?.id) return;
      try {
        const res = await api.get(`users/${user.id}/posts`);
        setPosts(res.data.slice(0, 1));
      } catch (error) {
        console.error('Failed to fetch last post:', error);
      }
    };

    fetchPosts();
  }, [user]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Last Post</h2>
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </div>
      <button onClick={() => {window.location.href = `/users/${user?.id}/posts`}} className="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors hover:shadow-lg">
        View All Posts
      </button>
    </div>
  );
}