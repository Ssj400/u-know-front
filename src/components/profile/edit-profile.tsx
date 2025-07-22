"use client"

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import api from "@/lib/axios";
import { UserStats } from "@/types/user";



export default function EditProfile() {
    const [user, setUser] = useState<UserStats | null>(null);

    useEffect(() => {
        async function fetchUserProfile() {
            const { data } = await api.get("/users/profile");
            setUser(data);
        }

        fetchUserProfile();
    }, []);

  return (
    <div className="bg-gray-900 w-[50%] text-white p-6 rounded-lg space-y-4 flex flex-col justify-center h-full">
      <label>
        Nickname
        <Input placeholder={user?.nickname} />
      </label>
      <label>
        Email
        <Input placeholder={user?.email} />
      </label>
      <label>
        Bio
        <Input placeholder={user?.bio === "" ? "Enter your bio" : user?.bio} />
      </label>
      <label>
        Role
        <Input placeholder={user?.role} readOnly/>
      </label>
    </div>
  );
}