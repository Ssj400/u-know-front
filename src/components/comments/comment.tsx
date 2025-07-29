import { useFetchCurrentUserProfile } from "@/hooks/useFetchCurrentUserProfile";
import api from "@/lib/axios";
import { Comments } from "@/types/comment";
import React, { useState } from "react";


export default function Comment(comment: Comments) {
  const { user } = useFetchCurrentUserProfile();
  const isAuthorized = user?.id === Number(comment.author.id) || user?.role === "ADMIN";

  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(comment.content);
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    setLoading(true);
    try {
      await api.put(`/comments/${comment.id}`, { content: newContent });
      window.location.reload();
    } catch (error) {
      console.error("Error updating comment:", error);
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <div className="text-sm text-gray-500 mb-2">
        <span className="font-medium text-indigo-600 text-[1.2rem]">@{comment.author.nickname}</span>{" "}
        on{" "}
        {new Date(comment.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      {isEditing ? (
        <div>
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded"
          />
          <div className="mt-2">
            <button
              onClick={handleEdit}
              className="text-green-500 hover:underline mr-4 cursor-pointer"
              disabled={loading}
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setNewContent(comment.content); // Volver al original
              }}
              className="text-red-500 hover:underline cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-300">{comment.content}</p>
          {isAuthorized && (
            <div className="mt-2">
              <button
                onClick={() => setIsEditing(true)}
                className="text-indigo-600 hover:underline mr-4 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this comment?")) {
                    api.delete(`/comments/${comment.id}`).then(() => {
                      window.location.reload();
                    });
                  }
                }}
                className="text-red-600 hover:underline cursor-pointer"
              >
                Delete
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}