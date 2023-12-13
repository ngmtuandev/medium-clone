import { useInfiniteQuery } from "@tanstack/react-query";
import { getApiPosts } from "@/apis/posts/postApi";

export const useGetPosts = (tag?: string) => {
  // params same cursor
  return useInfiniteQuery({
    queryKey: ["posts_infinite", tag], // truy vấn lại khi tag thay đổi -> queryKeuy : chuỗi định danh
    queryFn: ({ pageParam }) => getApiPosts(pageParam, tag), // pageParams : page Current
    initialPageParam: "", // params initial
    getNextPageParam: ({ nextCursor }) => {
      // tạo giá trị cho pageParam tiếp theo
      // console.log("nextCurSor >>>", nextCursor);
      // nextCursor : trang tiếp theo khi đã lướt đến giá trị cuối của trang hiện tại -> data api trả về
      // sau khi có nextCursor --> sẽ truyển lại lên queryFn
      // nextCursor <=> pageParam
      // nextCursor được trả về từ getApiPosts và sau đó trả về giá trị mới cho pageParam
      return nextCursor ?? undefined; // quyết định giá trị mới của pageParam truyền vào getApiPosts
    },
  });
};
