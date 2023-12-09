import axiosClient from "@/libs/axios-client";

export const getApiTags = async () => {
  const rs = await axiosClient.get("/tags");
  return rs.data;
};
