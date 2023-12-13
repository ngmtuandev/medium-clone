import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFollowUser } from "@/apis/user/followUser";
export const useFollowUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (followingUserId: any) => apiFollowUser(followingUserId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["follow"],
      });
    },
  });
};
