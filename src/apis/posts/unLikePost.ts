import axiosClient from "@/libs/axios-client";

export const apiUnLikePost = async (id: string) => {
  const rs = await axiosClient(`/posts/${id}/like`, {
    method: "delete",
  });
  return rs.data;
};
