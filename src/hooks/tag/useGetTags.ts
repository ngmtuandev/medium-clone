import { useQuery } from "@tanstack/react-query";
import { getApiTags } from "@/apis/tags/getApiTags";
export const useGetTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getApiTags(),
  });
  return {
    tags: data,
    isLoading,
  };
};
