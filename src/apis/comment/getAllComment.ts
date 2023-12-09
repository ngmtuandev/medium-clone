import axiosClient from "@/libs/axios-client";

export const apiGetComments = async (postId: string) => {
  const rs = await axiosClient(`/${postId}/comments`, {
    method: "get",
  });
  return rs.data;
};
