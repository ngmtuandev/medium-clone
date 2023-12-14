import axiosClient from "@/libs/axios-client";

export const getAllFlower = async (id: string) => {
  console.log("id follower >>>>", id);
  const rs = await axiosClient.get(`/users/followers/${id}`);
  return rs.data;
};
