import { getAllFlower } from "@/apis/user/getAllFlower";
import { useQuery } from "@tanstack/react-query";
export const useGetFollows = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["follow"],
    queryFn: () => getAllFlower(id),
  });
  console.log("data test >>", data);
  return {
    follows: data,
    isLoading,
  };
};
