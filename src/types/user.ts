import { Post } from "./post";

export interface UserStats {
  nickname: string;
  avatarUrl?: string;
  posts: Array<Post>;
  comments: Array<string>;
  role: "ADMIN" | "USER";
  bio?: string;
  createdAt: string;
  updatedAt: string;
  email: string;
}
