import axiosClient from "@/libs/axios-client";

export const apiUnFollowUser = async (followingUserId: string) => {
  const rs = await axiosClient(`/users/follow`, {
    data: { followingUserId },
    method: "delete",
  });
  return rs.data;
};
