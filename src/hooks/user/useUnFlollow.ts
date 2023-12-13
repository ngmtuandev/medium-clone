import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUnFollowUser } from "@/apis/user/unfollowUser";
export const useUnFollowUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (followingUserId: any) => apiUnFollowUser(followingUserId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["follow"],
      });
    },
  });
};
