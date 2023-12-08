import axiosClient from "@/libs/axios-client";

export const apiLikePost = async (id: string) => {
  const rs = await axiosClient(`/posts/${id}/like`, {
    method: "post",
  });
  return rs.data;
};
