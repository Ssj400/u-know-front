import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LogoutButton from '@/components/auth/logout-button';

const QuickActionsWidget = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Quick Actions</h2>
      <div className="space-y-4">
        <Link href="/main/posts/create" passHref>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:text-white hover:cursor-pointer text-black">Create New Post</Button>
        </Link>
        <Link href="/main/posts" passHref>
          <Button className="w-full bg-gray-700 hover:bg-gray-600 hover:text-white hover:cursor-pointer text-black">Explore Posts</Button>
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
};

export default QuickActionsWidget;
