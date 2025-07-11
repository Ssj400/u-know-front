'use client';

import Link from 'next/link';
import { Post } from '@/types/post';
import  Card  from '@/components/ui/card';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card className="bg-gray-200 p-4 shadow-md hover:shadow-xl transition-shadow rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="text-indigo-600 font-medium">{post.category.name}</span>
          <span>{formattedDate}</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>

        <p className="text-gray-600 text-sm">
          {post.content.length > 150
            ? post.content.slice(0, 150) + '...'
            : post.content}
        </p>

        <div className="text-sm text-gray-500">By {post.author.nickname}</div>

        <Link
           href={`/main/posts/${post.id}`}
          className="text-blue-600 hover:underline text-sm mt-1 self-start"
        >
          Read more →
        </Link>
      </div>
    </Card>
  );
}
