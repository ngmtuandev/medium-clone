import { Header } from "@/components";
import Posts from "@/components/Posts";
import Tags from "@/components/Tags";

const HomePage = () => {
  return (
    <div className="w-[100%]">
      <Header></Header>
      <div className="flex px-main pt-[100px]">
        <div className="w-[70%] h-screen ">
          <Posts></Posts>
        </div>
        <div className="w-[30%] h-screen ">
          <Tags></Tags>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
