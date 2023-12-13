import axiosClient from "@/libs/axios-client";

export const getAllFlower = async (id: string) => {
  console.log("id follower >>>>", id);
  const rs = await axiosClient.get(`/users/followers`, {
    data: { id },
  });
  return rs.data;
};
