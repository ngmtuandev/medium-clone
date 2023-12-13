import axiosClient from "@/libs/axios-client";

export const getApiPosts = async (cursor: string, tag?: string) => {
  const rs = await axiosClient.get(`/posts/`, {
    params: { cursor, tag },
  });
  return rs.data;
};
