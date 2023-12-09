import { create } from "zustand";

export const useComment = create((set) => ({
  isShowModel: false,
  setIsShowModel: (isShow: boolean) => set({ isShowModel: isShow }),
  setDataUser: async () => {},
}));
