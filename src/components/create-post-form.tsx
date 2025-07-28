"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { PostForm } from "@/types/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import Loading from "./loading";

export default function CreatePostForm() {
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
      await api.post("/posts", formData);
      router.push("/main/posts");
    } catch (error) {
      setError("Failed to create post.");
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {categoriesLoading && <Loading />}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error || categoriesError && <p className="text-red-500">{error || categoriesError}</p>}
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
          {isLoading ? "Creating..." : "Create Post"}
        </Button>
      </form>
    </>
  );
}
