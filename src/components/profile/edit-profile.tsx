"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useFetchUserProfile } from "@/hooks/fetchUserProfile";
import { updateUserProfile } from "./updateUserProfile";
import { loading } from "@/components/loading";

export default function EditProfile() {
  const { user } = useFetchUserProfile();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [formFilled, setFormFilled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFormFilled(nickname !== "" || email !== "" || bio !== "");
  }, [nickname, email, bio]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedData = {
      nickname: nickname !== "" ? nickname : user?.nickname ?? "",
      email: email !== "" ? email : user?.email ?? "",
      bio: bio !== "" ? bio : user?.bio ?? "",
    };

    await updateUserProfile(updatedData, setIsLoading);
  };

  return (
    <div className="bg-gray-900 w-[50%] text-white p-6 rounded-lg space-y-4 flex flex-col justify-center h-full">
    {isLoading ? (
      loading()) : null}
      <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center text-4xl font-bold mr-3 self-center mb-4">
        {user?.nickname.charAt(0).toUpperCase()}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col w-full">
        <label>
          Nickname
          <Input
            placeholder={user?.nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <label>
          Email
          <Input
            placeholder={user?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Bio
          <Input
            placeholder={user?.bio === "" ? "Enter your bio" : user?.bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <label>
          Role
          <Input placeholder={user?.role} readOnly />
        </label>
        {formFilled ? (
          <button className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer active:bg-blue-700">
            Save Changes
          </button>
        ) : (
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-not-allowed"
            disabled
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
}
