import axiosClient from "@/libs/axios-client";

export const getApiPosts = async (cursor: string) => {
  const rs = await axiosClient.get(`/posts/`, {
    params: { cursor },
  });
  return rs.data;
};
