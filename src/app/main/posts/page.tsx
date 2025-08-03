"use client";
import PostCard from "@/components/post-card";
import Navbar from "@/components/navbar";
import AddPostButton from "@/components/add-post-button";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import Loading from "@/components/loading";
import { useFetchCategories } from "@/hooks/useFetchCategories";

export default function PostsPage() {
  const { posts, error: postsError, loading: loadingPosts } = useFetchPosts();
  const { categories } = useFetchCategories();

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      {loadingPosts && <Loading></Loading>}

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All Posts</h1>
          <select
            className="bg-gray-800 text-white p-2 rounded"
            name="categoryId"
            id="categoryId"
            required
            value=""
          > 
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <AddPostButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}

          {postsError && <div className="text-red-500">{postsError}</div>}
        </div>
      </div>
    </div>
  );
}
