import axiosClient from "@/libs/axios-client";

export const getUserProfile = async (username: string) => {
  const rs = await axiosClient.get(`/users/${username}`, {
    // params: { username: username },
  });
  return rs.data;
};
