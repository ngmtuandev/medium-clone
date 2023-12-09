import { apiGetComments } from "@/apis/comment/getAllComment";
import { useQuery } from "@tanstack/react-query";
export const useGetComments = (postId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["comment"],
    queryFn: () => apiGetComments(postId),
  });
  return {
    comments: data,
    isLoading,
  };
};
