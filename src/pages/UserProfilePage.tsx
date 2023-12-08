import { Button, Header } from "@/components";
import getRandomImage from "@/helpers/randomImage";
import { useGetUserProfile } from "@/hooks/user/useGetUserProfile";
import { useParams, useNavigate } from "react-router-dom";
import icons from "@/utils/icons";
import { useGetPostByUser } from "@/hooks/user/useAllPostByUser";
import formatCreatedAt from "@/helpers/formatDate";
import getRandomNumber from "@/helpers/randomReadTime";
const UserProfilePage = () => {
  const { username } = useParams();
  const { FaUserFriends, IoMdBook } = icons;
  const navigate = useNavigate();
  const { userProfile } = useGetUserProfile(username!);
  const { posts } = useGetPostByUser(username!);
  console.log("userProfile Post by user >>>", posts);
  return (
    <div className="w-[100%] ">
      <Header></Header>
      <div className="w-[100%] px-main gap-4 flex pt-[80px]">
        <div className="w-[70%] h-screen">
          <div>
            <div className="h-[200px] w-[100%]">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={getRandomImage()}
                alt=""
              />
            </div>
          </div>
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
                      <span className="font-bold text-[20px]">
                        {post?.title}
                      </span>
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
        </div>
        <div className="w-[30%] h-screen pl-[40px] pt-[40px] ml-2 border-l-1">
          <div>
            <div>
              <img
                className="w-[80px] h-[80px] rounded-full"
                src={
                  userProfile?.image !== null
                    ? userProfile?.image
                    : getRandomImage()
                }
              ></img>
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700 text-[20px]">
                {userProfile?.username}
              </span>
            </div>
            <div className="flex mt-4 items-center text-color-cray-200 gap-2">
              <div>
                <IoMdBook size={22}></IoMdBook>
              </div>
              <span className="font-semibold ">Book Author</span>
            </div>
            <div className="flex items-center text-yellow-500 gap-2">
              <div>
                <FaUserFriends size={22}></FaUserFriends>
              </div>
              <span className="font-semibold ">Friend of Medium</span>
            </div>
            <div className="mt-4">
              <Button text="Follow"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
