import api from "@/lib/axios";

type UserData = {
  nickname: string;
  email: string;
  bio: string;
};

export async function updateUserProfile(
  data: UserData,
  setIsloading: (loading: boolean) => void
) {
  setIsloading(true);

  try {
    console.log(data);
    const response = await api.patch("/users/profile", {
      nickname: data.nickname,
      email: data.email,
      bio: data.bio,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  } finally {
    setIsloading(false);
  }
}
