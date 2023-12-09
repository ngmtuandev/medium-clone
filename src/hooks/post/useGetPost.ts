import { useInfiniteQuery } from "@tanstack/react-query";
import { getApiPosts } from "@/apis/posts/postApi";

export const useGetPosts = () => {
  // params same cursor
  return useInfiniteQuery({
    queryKey: ["posts_infinite"],
    queryFn: ({ pageParam }) => getApiPosts(pageParam), // pageParams : page Current
    initialPageParam: "", // params initial
    getNextPageParam: ({ nextCursor }) => {
      // console.log("nextCurSor >>>", nextCursor);
      // nextCursor : trang tiếp theo khi đã lướt đến giá trị cuối của trang hiện tại -> data api trả về
      // sau khi có nextCursor --> sẽ truyển lại lên queryFn
      // nextCursor <=> pageParam
      // nextCursor được trả về từ getApiPosts và sau đó trả về giá trị mới cho pageParam
      return nextCursor ?? undefined; // quyết định giá trị mới của pageParam truyền vào getApiPosts
    },
  });
};
