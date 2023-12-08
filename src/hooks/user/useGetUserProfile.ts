import { getUserProfile } from "@/apis/user/getUserProfile";
import { useQuery } from "@tanstack/react-query";
export const useGetUserProfile = (username: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => getUserProfile(username),
  });
  return {
    userProfile: data,
    isLoading,
  };
};
