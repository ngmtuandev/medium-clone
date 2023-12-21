import { Header, ListFollow, ListPost } from "@/components";
import { useGetPostByUser } from "@/hooks/user/useAllPostByUser";
import { useAuth } from "@/store/authStore";
import { Tabs, Tab, Avatar } from "@nextui-org/react";
import { useState } from "react";
import getRandomImage from "@/helpers/randomImage";
import { useGetFollows } from "@/hooks/user/useAllFlower";

const ProfileMePage = () => {
  const dataUser = useAuth((state: any) => state.dataUser);
  const { posts } = useGetPostByUser(dataUser?.username!);
  const { follows } = useGetFollows(dataUser?.id);

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
        <div className="w-[70%] pr-[12px]">
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
              <Avatar
                src={
                  dataUser?.image !== null ? dataUser?.image : getRandomImage()
                }
                size="lg"
                isBordered
                className="mb-2"
              ></Avatar>
              <span className="my-4 text-[18px] font-semibold">
                {dataUser?.email}
              </span>
              <p className="font-medium text-[12px] text-color-cray-200 cursor-pointer">
                Edit Profile
              </p>
            </div>
            <div>
              <h3 className="mt-6 uppercase font-semibold mb-2">
                List User Follow
              </h3>
              {follows &&
                follows?.followings?.map((user: TUser) => {
                  return (
                    <div key={user?.id}>
                      <ListFollow user={user}></ListFollow>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMePage;
