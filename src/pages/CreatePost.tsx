import { Header } from "@/components";
import { getBase64 } from "@/helpers/getBase64";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import icons from "@/utils/icons";

const CreatePost = () => {
  const { CiImageOn } = icons;
  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["image"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const handleQuillChange = (
    content: string,
    delta: any,
    source: string,
    editor: any
  ) => {
    setData({ ...data, html: content });
  };
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
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex lg:w-[85%] lg:h-[40px] p-[8px] rounded-md border-[1px]">
              <input
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="w-[100%] border-none outline-none"
                placeholder="Title"
              ></input>
            </div>
            <div
              onClick={handleCreatePost}
              className="flex lg:w-[14%] lg:h-[40px] cursor-pointer p-[8px]  justify-center items-center rounded-md border-[1px] bg-color-cray-200"
            >
              <span className="text-gray-50 font-medium">Upload Post</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex lg:w-[100%] lg:h-[40px] p-[8px] rounded-md border-[1px]">
              <input
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                className="w-[100%] border-none outline-none"
                placeholder="Description"
              ></input>
            </div>
          </div>
          <div className="flex">
            <label htmlFor="image">
              <CiImageOn size={30}></CiImageOn>
            </label>
            <input
              hidden
              onChange={(value) => handleSelectImage(value)}
              type="file"
              id="image"
            ></input>
            <img className="w-[20%]" src={data?.featuredImage}></img>
          </div>
          <div>
            <ReactQuill
              className="h-[300px]"
              onChange={handleQuillChange}
              modules={modules}
              theme="snow"
              value={data?.html}
            />
          </div>
        </div>
        {/* <div onClick={handleCreatePost}>
          <Button
            handleBtn={handleCreatePost}
            isLoading={false}
            text={"Create"}
          ></Button>
        </div> */}
      </div>
    </div>
  );
};

export default CreatePost;
