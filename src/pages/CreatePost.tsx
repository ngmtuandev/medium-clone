import { Button, Header } from "@/components";
import { getBase64 } from "@/helpers/getBase64";
import { useState } from "react";

const CreatePost = () => {
  const [showTitle, setShowTitle] = useState(false);

  const [data, setData] = useState<TDataCreatePost>({
    featuredImage: "",
    title: "",
    description: "",
    text: "",
    html: "",
    tagIds: [],
  });
  const handleCreatePost = async () => {
    await fetch(
      "https://ulitmate-blog-app-production.up.railway.app/api/posts",
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token-user-medium")}`,
        },
        method: "post",
      }
    );
  };
  const handleSelectImage = async (event: any) => {
    const imgBase64 = await getBase64(event.target.files[0]);
    setData({ ...data, featuredImage: imgBase64 });
  };
  return (
    <div>
      <Header></Header>
      <div className="pt-[80px] px-[100px]">
        <div>
          <div className="flex items-center">
            {showTitle && (
              <span className="mr-4 font-medium text-[22px] text-gray-400">
                Title
              </span>
            )}
            <div className="flex border-l-1 mt-10 mb-4">
              <input
                value={data.title}
                onBlur={() => setShowTitle(false)}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="text-[32px] outline-none placeholder:text-[32px] pl-main placeholder:text-gray-400 text-gray-600"
                placeholder="Title"
              ></input>
            </div>
          </div>
          <div className="flex items-center">
            <div></div>
            <div className="flex border-l-1">
              <input
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                className="text-[16px] outline-none placeholder:text-[20px] pl-main placeholder:text-gray-400 text-gray-600"
                placeholder="description"
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="image">Anh</label>
            <input
              onChange={(value) => handleSelectImage(value)}
              type="file"
              id="image"
            ></input>
            <img src={data?.featuredImage}></img>
          </div>
        </div>
        <div onClick={handleCreatePost}>
          <Button
            handleBtn={handleCreatePost}
            isLoading={false}
            text={"Create"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
