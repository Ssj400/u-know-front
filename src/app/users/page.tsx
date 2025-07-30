"use client";
import Navbar from "@/components/navbar";
import { useFetchUsers } from "@/hooks/useFetchUsers";




export default function UsersPage() {
    const { users } = useFetchUsers();
    if (!users || users.length === 0) {
        return <p className="p-6 text-red-500">No users found</p>;
    }

  return (
    <div className="w-full bg-gray-900 min-h-screen">
      <Navbar />
      { users.map(user => (
        <div key={user.id} className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">{user.nickname}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>
      ))}

    </div>
  );
}   