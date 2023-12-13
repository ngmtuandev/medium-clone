import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import getRandomImage from "@/helpers/randomImage";
import formatCreatedAt from "@/helpers/formatDate";
import getRandomNumber from "@/helpers/randomReadTime";
const ListPost = ({ posts }: { posts: any }) => {
  const navigate = useNavigate();
  return (
    <div>
      {posts?.map((post: any) => {
        return (
          <div
            key={post.id}
            className="flex cursor-pointer justify-between items-center"
            onClick={() => navigate(`/post/${post?.slug}`)}
          >
            <div className="w-[65%] mb-8">
              {/* <div className="flex gap-2 items-center">
                      <img
                        className="w-[28px] h-[28px] rounded-full"
                        src={post?.author?.image ?? getRandomImage()}
                      ></img>
                      <span className="font-semibold text-[15px]">
                        {post?.author?.username}
                      </span>
                    </div> */}
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
            </div>
            <div className="w-[35%] ml-4 flex justify-end">
              <img
                src={getRandomImage()}
                className="w-[70%] rounded-md my-4"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ListPost);
