import { Comments } from "@/types/comment";
import React from "react";


export default function Comment(comment: Comments) {
    console.log(comment);
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
    </div>
  );
}