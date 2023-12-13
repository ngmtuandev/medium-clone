import { Header, ListPost } from "@/components";
import { useGetPostByUser } from "@/hooks/user/useAllPostByUser";
import { useAuth } from "@/store/authStore";
import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import getRandomImage from "@/helpers/randomImage";
import { useGetFollows } from "@/hooks/user/useAllFlower";
const ProfileMePage = () => {
  const dataUser = useAuth((state: any) => state.dataUser);
  const { posts } = useGetPostByUser(dataUser?.username!);
  // const { follows, isLoading } = useGetFollows(dataUser?.id);
  // console.log("follower >>>", follows);

  // useEffect(() => {
  //   const getchApi = async () => {
  //     let data = await fetch(
  //       "https://ulitmate-blog-app-production.up.railway.app/api/users/followers",
  //       {
  //         method: "get",
  //         body: JSON.stringify({ id: dataUser?.id }),
  //       }
  //     );
  //     data = await data.json();
  //     console.log("data follower", data);
  //     return data;
  //   };
  //   getchApi();
  // }, []);

  const [tab, setTab] = useState("Posts");
  const handleSelectTab = (key: any) => {
    setTab(key);
  };

  return (
    <div>
      <Header></Header>
      <div className="w-[100%]">
        <img
          src={getRandomImage()}
          className="w-[100%] h-[250px] object-cover"
        ></img>
      </div>
      <div className="w-[100%] flex justify-between pt-[40px] h-screen  px-main">
        <div className="w-[70%] pr-[12px] border-r-1">
          <Tabs
            key={"underlined"}
            variant={"underlined"}
            aria-label="Tabs variants"
            onSelectionChange={handleSelectTab}
          >
            <Tab key="Posts" className="mr-12" title="Posts" />
            <Tab key="Marks" className="mr-12" title="Marks" />
          </Tabs>
          <div>
            {tab === "Posts" ? (
              <ListPost posts={posts}></ListPost>
            ) : tab === "Marks" ? (
              <div>Marks</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-[25%]">
          <div>
            <div className="flex-col">
              <img
                className="w-[80px] h-[80px] mb-2 rounded-full"
                src={
                  dataUser?.image !== null ? dataUser?.image : getRandomImage()
                }
              ></img>
              <span className="my-4 text-[18px] font-semibold">
                {dataUser?.email}
              </span>
              <p className="font-medium text-[12px] text-color-cray-200 cursor-pointer">
                Edit Profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMePage;
