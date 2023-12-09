import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateNewPost } from "@/apis/posts/createNewPost";
export const useCreateNewPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TDataCreatePost) => apiCreateNewPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
    },
  });
};
