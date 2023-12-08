import axiosClient from "@/libs/axios-client";

export const getApiItemPost = async (slug: string) => {
  const rs = await axiosClient(`/posts/${slug}`, {
    method: "get",
  });
  return rs.data;
};
