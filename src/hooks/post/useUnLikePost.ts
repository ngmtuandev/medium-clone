import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiUnLikePost } from "@/apis/posts/unLikePost";
export const useUnLikePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiUnLikePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
    },
  });
};
