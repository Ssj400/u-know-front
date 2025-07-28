"use client";

import { useFetchCategories } from "@/hooks/useFetchCategories";
import api from "@/lib/axios";
import { PostForm } from "@/types/post";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFetchPostData } from "@/hooks/useFetchPostData";

export default function EditPostForm() {
      const router = useRouter();
  const [formData, setFormData] = useState<PostForm>({
    title: "",
    content: "",
    categoryId: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories();
  const id = useParams().id;
  const { post, loading: postLoading, error: postError } = useFetchPostData(
    parseInt(String(id))
  );

  const isPageLoading = isLoading || categoriesLoading || postLoading;
  const displayError = error || categoriesError || postError;

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content,
        categoryId: post.categoryId,
      });
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.categoryId) {
      setError("Please select a category.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      await api.patch(`/posts/${id}`, formData);
      router.push(`/main/posts/${id}`);
    } catch (error) {
      setError("Failed to update post.");
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isPageLoading && <Loading />}
      <form onSubmit={handleSubmit} className="space-y-6">
        {displayError && <p className="text-red-500">{displayError}</p>}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-white"
          >
            Title
          </label>
          <Input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-white mb-2"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-white mb-2"
          >
            Category
          </label>
          <select
            name="categoryId"
            id="categoryId"
            value={formData.categoryId || ""}
            onChange={handleChange}
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
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
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Post"}
        </Button>
      </form>
    </>
  );
}