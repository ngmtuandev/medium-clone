import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiLikePost } from "@/apis/posts/likePostApi";
export const useLikePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiLikePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
    },
  });
};
