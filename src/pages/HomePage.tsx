import { Header } from "@/components";
import Posts from "@/components/Posts";
import Tags from "@/components/Tags";

const HomePage = () => {
  return (
    <div className="w-[100%]">
      <Header></Header>
      <div className="flex justify-center items-center px-main pt-[100px]">
        <div className="md:w-[70%] sm:w-[100%] h-screen ">
          <Posts></Posts>
        </div>
        <div className="w-[30%] sm:hidden md:block h-screen ">
          <Tags></Tags>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
