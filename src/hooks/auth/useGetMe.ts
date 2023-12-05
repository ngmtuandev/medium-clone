import { getMeApi } from "@/apis/auth/authApi";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMeApi(),
  });
  return {
    dataUser: data,
    isLoading,
  };
};
