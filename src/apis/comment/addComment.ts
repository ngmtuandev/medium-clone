import axiosClient from "@/libs/axios-client";

export const apiAddComment = async ({
  data,
  postId,
}: {
  postId: string;
  data: string;
}) => {
  const rs = await axiosClient(`/${postId}/comments`, {
    data: data,
    method: "post",
  });
  return rs.data;
};
