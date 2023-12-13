import axiosClient from "@/libs/axios-client";

export const getAllFlower = async (id: string) => {
  const rs = await axiosClient(`/users/followers`, {
    data: { id: id },
    method: "get",
  });
  return rs.data;
};
