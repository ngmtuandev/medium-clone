import axiosClient from "@/libs/axios-client";

export const apiFollowUser = async (followingUserId: string) => {
  const rs = await axiosClient(`/users/follow`, {
    data: { followingUserId },
    method: "Post",
  });
  return rs.data;
};
