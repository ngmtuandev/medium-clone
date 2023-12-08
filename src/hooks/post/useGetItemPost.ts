import { useQuery } from "@tanstack/react-query";
import { getApiItemPost } from "@/apis/posts/itemPostApi";
export const useGetItemPost = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: () => getApiItemPost(slug),
  });
  return {
    itemPost: data,
    isLoading,
  };
};
