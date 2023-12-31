import { Button, Header } from "@/components";
import getRandomImage from "@/helpers/randomImage";
import { useGetUserProfile } from "@/hooks/user/useGetUserProfile";
import { useParams, useNavigate } from "react-router-dom";
import icons from "@/utils/icons";
import { useGetPostByUser } from "@/hooks/user/useAllPostByUser";
import formatCreatedAt from "@/helpers/formatDate";
import getRandomNumber from "@/helpers/randomReadTime";
import { useUnFollowUser } from "@/hooks/user/useUnFlollow";
import { useFollowUser } from "@/hooks/user/useFollow";
import Swal from "sweetalert";
import { useQueryClient } from "@tanstack/react-query";
import { Avatar } from "@nextui-org/react";

const UserProfilePage = () => {
  const { username } = useParams();
  const queryClient = useQueryClient();
  const { FaUserFriends, IoMdBook } = icons;
  const navigate = useNavigate();
  const { userProfile } = useGetUserProfile(username!);
  const { mutate: $follow, isPending: isPendingFollow } = useFollowUser();
  const { mutate: $unfollow, isPending: isPendingUnFollow } = useUnFollowUser();
  const { posts } = useGetPostByUser(username!);

  const handleFollow = () => {
    $follow(userProfile?.user?.id, {
      onSuccess: () => {
        Swal({
          title: "Follow User Successfully",
          icon: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      },
    });
  };

  const handleUnFollow = () => {
    $unfollow(userProfile?.user?.id, {
      onSuccess: () => {
        Swal({
          title: "UnFollow User Successfully",
          icon: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      },
    });
  };

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
              <Avatar
                isBordered
                size="lg"
                className="z-0"
                src={userProfile?.image ?? getRandomImage()}
              ></Avatar>
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700 text-[20px]">
                {userProfile?.username}
              </span>
            </div>
            <div className="flex mt-4 items-center text-color-cray-200 gap-2">
              <div>
                <IoMdBook size={20}></IoMdBook>
              </div>
              <span className="font-semibold text-[12px]">Book Author</span>
            </div>
            <div className="flex items-center mt-2 text-yellow-300 gap-2">
              <div>
                <FaUserFriends size={20}></FaUserFriends>
              </div>
              <span className="font-semibold text-[12px]">
                Friend of Medium
              </span>
            </div>
            <div className="mt-4">
              {userProfile?.isFollowing ? (
                <Button
                  handleBtn={handleUnFollow}
                  text="Unfollow"
                  isLoading={isPendingUnFollow}
                ></Button>
              ) : (
                <Button
                  handleBtn={handleFollow}
                  text="Follow"
                  isLoading={isPendingFollow}
                ></Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
