import axiosClient from "@/libs/axios-client";

export const apiCreateNewPost = async (data: TDataCreatePost) => {
  const rs = await axiosClient.post(`/posts`, {
    data,
  });
  return rs.data;
};
