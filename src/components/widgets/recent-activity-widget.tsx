'use client';

import React, { useEffect } from 'react';
import { Post } from '@/types/post';
import PostCard from '@/components/post-card';
import api from '@/lib/axios';

const RecentActivityWidget = () => {
  const [recentPosts, setRecentPosts] = React.useState<Post[]>([]);
  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await api.get('/posts'); 
        setRecentPosts(res.data.slice(0, 2)); 
      } catch (error) {
        console.error('Failed to fetch recent posts:', error);
      }
    };

    fetchRecentPosts();
  })

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Recent Activity</h2>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivityWidget;
