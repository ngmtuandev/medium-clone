import axiosClient from "@/libs/axios-client";

export const authApiSignUp = async (data: TInput) => {
  const rs = await axiosClient("/users/signup", {
    method: "post",
    data,
  });
  return rs.data;
};

export const authApiLogin = async (data: TInput) => {
  const rs = await axiosClient("/users/login", {
    method: "post",
    data,
  });
  return rs.data;
};
