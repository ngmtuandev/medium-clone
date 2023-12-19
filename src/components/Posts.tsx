import getRandomImage from "@/helpers/randomImage";
import InfiniteScroll from "react-infinite-scroll-component";
import formatCreatedAt from "@/helpers/formatDate";
import getRandomNumber from "@/helpers/randomReadTime";
import { useGetPosts } from "@/hooks/post/useGetPost";
import { useNavigate } from "react-router-dom";

import Tags from "./Tags";
import { useTagStore } from "@/store/tagsStore";
const Posts = () => {
  const navigate = useNavigate();
  let selectedTag = useTagStore((state: any) => state.selectedTag);

  const { data, fetchNextPage, hasNextPage, isLoading } = useGetPosts(
    selectedTag || ""
  );
  console.log("is loading >>>>", data);

  const _posts = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page.posts];
  }, []);

  const handleFetchNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="pr-main">
      <div className="sm:flex overflow-hidden scrollbar-thin scrollbar-thumb-color-cray-200 scrollbar-track-gray-100 overflow-x-auto sm:mb-6 pb-[16px] md:hidden">
        <Tags></Tags>
      </div>
      <InfiniteScroll
        dataLength={_posts?.length ?? 0}
        next={handleFetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9}
      >
        {_posts?.map((post: any) => (
          <div
            key={post.id}
            className="flex cursor-pointer lg:py-[32px] border-b-[1px] border-gray-200"
            onClick={() => navigate(`/post/${post?.slug}`)}
          >
            <div className="w-[65%] mb-8">
              <div className="flex gap-2 items-center">
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src={post?.author?.image ?? getRandomImage()}
                ></img>
                <span className="font-semibold text-[15px]">
                  {post?.author?.username}
                </span>
              </div>
              <div>
                <span className="font-bold text-[20px]">{post?.title}</span>
              </div>
              <div>
                <span className="text-gray-500 text-[16px]">
                  {post?.description?.length < 100
                    ? post?.description
                    : `${post?.description?.slice(0, 100)}...`}
                </span>
              </div>
              <div className="fex flex-row gap-4">
                <span className="text-[12px] font-semibold text-gray-700">
                  {formatCreatedAt(post?.createdAt)}
                </span>
                <span className="text-[12px] ml-3 font-semibold text-gray-700">
                  {getRandomNumber()} phút đọc
                </span>
              </div>
              <div className="flex gap-6 mt-2">
                {post?.tags &&
                  post?.tags?.map(
                    (item: { id: string; name: string; slug: string }) => {
                      return (
                        <div key={item?.id}>
                          <span className="text-gray-400 text-[13px]">
                            {`#${item?.name}`}
                          </span>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            <div className="w-[35%] ml-4">
              <img
                src={getRandomImage()}
                className="w-[70%] rounded-md my-4"
              ></img>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
