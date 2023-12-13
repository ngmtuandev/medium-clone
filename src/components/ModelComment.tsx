import getRandomImage from "@/helpers/randomImage";
import Swal from "sweetalert";
import { useAuth } from "@/store/authStore";
import { useComment } from "@/store/commentStore";
import icons from "@/utils/icons";
import { Button } from ".";
import { useState } from "react";
import { useAddComment } from "@/hooks/comment/useAddComment";
import { useGetComments } from "@/hooks/comment/useGetComments";
import formatCreatedAt from "@/helpers/formatDate";
import { Tooltip } from "@nextui-org/react";

const ModelComment = ({ postId }: { postId: string }) => {
  const setIsShowModel = useComment((state: any) => state.setIsShowModel);
  const dataUser = useAuth((state: any) => state.dataUser);
  const [body, setBody] = useState("");
  const { IoMdClose } = icons;
  const { mutate: $addComment, isPending } = useAddComment();
  const { comments, isLoading } = useGetComments(postId);
  console.log("comment test id ne >>>", comments);
  console.log("isloding", isLoading);
  const handleCloseModel = () => {
    setIsShowModel(false);
  };
  const handleAddComment = () => {
    const data = {
      body,
    };
    $addComment(
      { data, postId },
      {
        onSuccess: () => {
          Swal({
            title: "Comment Blog Successfully",
            icon: "success",
          });
          setBody("");
        },
      }
    );
  };
  return (
    <div
      onClick={handleCloseModel}
      className="w-[100%] z-1000 fixed flex left-0 top-0 justify-end h-screen bg-gray-600 bg-opacity-30 shadow-md transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:w-[40%] sm:w-[100%] h-[100%] gap-4 flex-col flex pt-[100px] px-main bg-white"
      >
        <div className="w-[100%] py-[8px] flex justify-between">
          <div>
            <span className="font-semibold">{`Responsive (${comments?.length})`}</span>
          </div>
          <div className="cursor-pointer" onClick={handleCloseModel}>
            <IoMdClose size={22}></IoMdClose>
          </div>
        </div>
        <div className="w-[100%] p-[20px] gap-4 rounded-lg bg-white shadow-lg pb-[16px] border-b-1">
          <div>
            <div className="flex gap-2 items-center">
              <img
                className="w-[32px] rounded-full h-[32px]"
                src="https://images.pexels.com/photos/17788277/pexels-photo-17788277/free-photo-of-gift-shop-by-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              ></img>
              <span>{dataUser?.username}</span>
            </div>
            <div className="w-[100%] px-[4px] h-[100px] mt-3 ">
              <input
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-[100%] outline-none text-gray-500"
                placeholder="What are your thought"
              ></input>
            </div>
            <div className="flex gap-4 justify-end items-center">
              <div>
                <span>Cancel</span>
              </div>
              <div>
                <Button
                  isLoading={isPending}
                  handleBtn={handleAddComment}
                  text={"Comment"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-auto overflow-auto scrollbar-none scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          {comments?.map((item: any) => {
            return (
              <div key={item?.id} className="pb-[8px] border-b-1 mt-2">
                <div className="flex items-center">
                  <Tooltip
                    className="px-[8px] h-[30px]"
                    showArrow={true}
                    content={`My name is ${item?.user?.username}`}
                  >
                    <img
                      className="w-[36px] mr-2 h-[36px] rounded-full"
                      // src={item?.user?.image ?? getRandomImage()}
                      src="https://images.pexels.com/photos/17788277/pexels-photo-17788277/free-photo-of-gift-shop-by-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    ></img>
                  </Tooltip>
                  <div className="flex flex-col">
                    <span>{item?.user?.username}</span>
                    <span className="text-[12px] font-semibold">
                      {formatCreatedAt(item?.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span>{item?.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModelComment;
