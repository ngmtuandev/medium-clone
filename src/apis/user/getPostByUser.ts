import axiosClient from "@/libs/axios-client";

export const getPostsByUser = async (username: string) => {
  const rs = await axiosClient.get(`/users/${username}/posts`);
  return rs.data;
};
