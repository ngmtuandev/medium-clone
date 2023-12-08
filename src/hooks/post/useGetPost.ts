import { useInfiniteQuery } from "@tanstack/react-query";
import { getApiPosts } from "@/apis/posts/postApi";

export const useGetPosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts_infinite"],
    queryFn: ({ pageParam }) => getApiPosts(pageParam),
    initialPageParam: "",
    getNextPageParam: ({ nextCursor }) => {
      // nextCursor <=> pageParam
      return nextCursor ?? undefined;
    },
  });
};
