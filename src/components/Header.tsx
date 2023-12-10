import { useAuth } from "@/store/authStore";
import icons from "@/utils/icons";
import path from "@/utils/path";
import { useEffect, memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const { IoIosSearch, IoIosLogOut, TfiWrite } = icons;

  const navigation = useNavigate();

  const isLogin = useAuth((state: any) => state.isLogin);
  const setDataUser = useAuth((state: any) => state.setDataUser);
  const dataUser = useAuth((state: any) => state.dataUser);
  useEffect(() => {
    setDataUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token-user-medium");
    navigation("/login");
  };

  return (
    <div className="flex w-[100%] fixed z-1000 bg-white shadow-lg h-[70px] gap-3 md:justify-between sm:justify-between items-center">
      <div className="md:w-[15%]  sm:w-[30%] h-[100%] ">
        <div
          className="flex h-[100%] justify-center items-center text-center cursor-pointer"
          onClick={() => navigation("/")}
        >
          <span className="sm:text-[25px] text-center md:text-[40px] font-bold text-color-cray-200">
            Me
          </span>
          <span className="sm:text-[25px] text-center md:text-[40px] font-bold text-gray-800">
            dium
          </span>
        </div>
      </div>
      <div className="w-[25%] h-[100%] md:flex justify-center sm:hidden sm:text-[15px] text-[12px] items-center gap-9">
        <span className="cursor-pointer font-semibold">Bài viết</span>
        <span className="cursor-pointer font-semibold">Hỏi đáp</span>
        <span className="cursor-pointer font-semibold">Thảo luận</span>
      </div>
      <div className="sm:hidden md:w-[45%] flex justify-center items-center h-[90%]">
        <input
          className="w-[75%] sm:w-[55%] pl-[8px] h-[40px] outline-none border rounded-tl-lg rounded-bl-lg pl-2 
          border-gray-500 flex justify-center items-center"
          placeholder="Bạn muốn tìm kiếm gì ?"
        ></input>
        <div className="w-[9%] flex cursor-pointer justify-center items-center h-[40px] rounded-tr-lg rounded-br-lg bg-color-cray-200">
          <IoIosSearch size={25} color="white"></IoIosSearch>
        </div>
      </div>
      <div className="md:w-[20%] sm:w-[40%] flex justify-center items-center h-[100%] ">
        {!isLogin ? (
          <div className="flex justify-center gap-1 items-center">
            <div className="hover:text-color-cray-200 font-medium">
              <NavLink to={"/login"}>Đăng nhập</NavLink>
            </div>
            <span>{`  / `}</span>
            <div className="hover:text-color-cray-200 font-medium">
              <NavLink to={"/sign-up"}> {" Đăng kí"} </NavLink>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div
              className="flex justify-center cursor-pointer items-center"
              onClick={() => navigation(`${path.CREATE_POST}`)}
            >
              <TfiWrite size={22}></TfiWrite>
              <span className="ml-2">Write</span>
            </div>
            <div className=" items-center flex justify-center gap-4 cursor-pointer">
              <div className="md:inline-block sm:hidden">
                Hello, {dataUser?.username}
              </div>
              <div onClick={handleLogout}>
                <IoIosLogOut size={25} color="black"></IoIosLogOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Header);
