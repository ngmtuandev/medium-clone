import { getMeApi } from "@/apis/auth/authApi";
import { create } from "zustand";
import { useLocalStorage } from "react-use";
import useToken from "@/hooks/useToken";

export const useAuth = create((set) => ({
  dataUser: {
    id: "",
    name: null,
    image: null,
    email: "",
    username: "",
  },
  isLogin: !!localStorage.getItem("token-user-medium"),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  setDataUser: async () => {
    // const { token } = useToken();
    const token = localStorage.getItem("token-user-medium");
    if (token) {
      try {
        const userData = await getMeApi();
        console.log(userData);
        set({ dataUser: userData });
      } catch (error) {
        console.log(error);
      }
    }
  },
}));
