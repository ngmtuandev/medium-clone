import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddComment } from "@/apis/comment/addComment";
export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, postId }: { postId: string; data: any }) =>
      apiAddComment({ data, postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment"],
      });
    },
  });
};
