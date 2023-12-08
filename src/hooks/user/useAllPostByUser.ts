import { getPostsByUser } from "@/apis/user/getPostByUser";
import { useQuery } from "@tanstack/react-query";
export const useGetPostByUser = (username: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["post-user"],
    queryFn: () => getPostsByUser(username),
  });
  return {
    posts: data,
    isLoading,
  };
};
