"use client";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import { useFetchCurrentUserProfile } from "@/hooks/useFetchCurrentUserProfile";
import { useFetchUsers } from "@/hooks/useFetchUsers";




export default function UsersPage() {
    const { users, loading: usersLoading, error: usersError } = useFetchUsers();
    const { user: currentUser } = useFetchCurrentUserProfile();

  return (
    <div className="w-full bg-gray-900 min-h-screen">
      <Navbar />
      {usersLoading && <Loading />}
      {usersError && <p className="p-6 text-red-500">{usersError}</p>}
      {users.map(user => user.id !== currentUser?.id && (
        <div key={user.id} className="p-6 border-b border-gray-800 cursor-pointer hover:bg-gray-700"  onClick={() => window.location.href = `/users/${user.id}/posts`}>
          <h2 className="text-xl font-bold text-white">{user.nickname}</h2>
          <p className="text-gray-400">{user.bio || "No bio found"}</p>
        </div>
      ))}
    </div>
  );
}   