import { Header } from "@/components";
import getRandomImage from "@/helpers/randomImage";
import { useGetItemPost } from "@/hooks/post/useGetItemPost";
import { useParams, useNavigate } from "react-router-dom";
import icons from "@/utils/icons";
import { useLikePost } from "@/hooks/post/useLikePost";
import { useAuth } from "@/store/authStore";
import { useUnLikePost } from "@/hooks/post/useUnLikePost";
import ModelComment from "@/components/ModelComment";
import { useComment } from "@/store/commentStore";
import { memo, useEffect } from "react";
import { useFollowUser } from "@/hooks/user/useFollow";
import Swal from "sweetalert";

const DetailPost = () => {
  let { slug } = useParams();
  const navigate = useNavigate();
  const { mutate: $likePost, isPending } = useLikePost();
  const { mutate: $unLikePost } = useUnLikePost();
  const { itemPost, isLoading } = useGetItemPost(slug!);
  const { mutate: $follow, isPending: isPendingFollow } = useFollowUser();
  const dataUser = useAuth((state: any) => state.dataUser);
  const { AiFillLike, AiOutlineLike, FaComments } = icons;

  console.log("item post >>>>", itemPost);

  const handleLike = (id: string) => {
    $likePost(id);
  };

  const handleUnLike = (id: string) => {
    $unLikePost(id);
  };

  const setIsShowModel = useComment((state: any) => state.setIsShowModel);
  const isShowModel = useComment((state: any) => state.isShowModel);
  const handleShowModel = () => {
    window.scrollTo(0, 0);
    setIsShowModel(true);
  };

  useEffect(() => {
    return setIsShowModel(false);
  }, []);

  const handleFollowUser = (idFollow: string) => {
    $follow(idFollow, {
      onSuccess: () => {
        Swal({
          title: `Follow ${itemPost?.author?.username} successfully`,
          icon: "success",
        });
      },
    });
  };

  return (
    <div className="w-[100%] relative">
      {isShowModel && <ModelComment postId={itemPost?.id}></ModelComment>}
      <Header></Header>
      <div className="w-[100%] px-main flex justify-center flex-col items-center">
        <div>
          <img
            className="w-[100%] justify-center flex"
            src={itemPost?.featuredImage ?? getRandomImage()}
          ></img>
        </div>
        <div className="w-[70%] ">
          <div className="justify-center flex my-5 text-[30px] uppercase text-center font-bold text-gray-800">
            <h2>{itemPost?.title}</h2>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(`/user/${itemPost?.author?.username}`)}
          >
            <div>
              <img
                className="w-[40px] rounded-full h-[40px]"
                src={getRandomImage()}
              ></img>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-semibold">
                {itemPost?.author?.username}
              </span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleFollowUser(itemPost?.author?.id);
                }}
                className="font-semibold text-color-cray-200 text-[13px] cursor-pointer"
              >
                {isPendingFollow ? "..." : "Follow"}
              </span>
            </div>
          </div>
          <div className="pt-[16px] px-[8px] flex items-center pb-[16px] gap-10 my-6 border-t-1 border-b-1">
            <div className="flex justify-center items-center gap-2">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (
                    itemPost?.likes?.find(
                      (item: any) => item?.user?.username === dataUser?.username
                    )
                  ) {
                    handleUnLike(itemPost?.id);
                  } else {
                    handleLike(itemPost?.id);
                  }
                }}
              >
                {itemPost?.likes?.find(
                  (item: any) => item?.user?.username === dataUser?.username
                ) ? (
                  <AiFillLike size={20}></AiFillLike>
                ) : (
                  <AiOutlineLike size={20}></AiOutlineLike>
                )}
              </div>
              <span>{itemPost?.likes?.length}</span>
            </div>
            <div onClick={handleShowModel}>
              <FaComments size={20}></FaComments>
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: itemPost?.html }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailPost);
