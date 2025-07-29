import { useFetchCurrentUserProfile } from "@/hooks/useFetchCurrentUserProfile";
import api from "@/lib/axios";
import { Comments } from "@/types/comment";
import React from "react";


export default function Comment(comment: Comments) {
  const { user } = useFetchCurrentUserProfile();
  const isAuthorized = user?.id === Number(comment.author.id) || user?.role === "ADMIN";

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <div className="text-sm text-gray-500 mb-2">
        <span className="font-medium text-indigo-600 text-[1.2rem]">@{comment.author.nickname}</span> On{" "}
        {new Date(comment.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <p className="text-gray-300">{comment.content}</p>
      {isAuthorized && (
        <div className="mt-2">
          <button
            onClick={() => {}}
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
    </div>
  );
}