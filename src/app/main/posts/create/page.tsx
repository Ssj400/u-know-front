'use client';
import Cookies from 'js-cookie';
import CreatePostForm from '@/components/create-post-form';
import SignUpButton from '@/components/ui/info-button/sign-up-button';

export default function CreatePostPage() {
    const access_token = Cookies.get('access_token');
    if (!access_token || access_token === undefined) {
        return (
            <div className="flex items-center justify-center h-screen flex-col space-y-4">
                <h1 className="text-2xl font-bold">You must be logged in to create a post.</h1>
                <SignUpButton></SignUpButton>
            </div>
        );
    } else {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create a New Post</h1>
      <div className="max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-md border border-gray-800">
        <CreatePostForm />
      </div>
    </div>
  );
}
}
