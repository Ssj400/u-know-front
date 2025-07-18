import api from "@/lib/axios";
import { Comments } from "@/types/comment";
import React from "react";
import { useState } from "react";

export default function AddComment({ onCommentAdded }: { onCommentAdded: (comment: Comments) => void }) {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await api.post(`/posts/${ window.location.pathname.split("/").pop()}/comments`, {
        content: comment,
      });

      onCommentAdded(res.data);

      setComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-gray-800 rounded-lg">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="p-2 bg-gray-700 text-white rounded-lg resize-none"
        rows={3}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? "Submitting..." : "Submit Comment"}
      </button>
    </form>
  );
}