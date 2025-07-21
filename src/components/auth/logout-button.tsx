"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      Cookies.remove("access_token");
      router.push("/auth/login");
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className="w-full bg-red-600 hover:bg-red-700 hover:text-white hover:cursor-pointer text-black"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
