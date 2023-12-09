import { create } from "zustand";

export const useTagStore = create((set) => ({
  tags: [],
  setTags: async (tags: any) => {
    set({ tags: tags });
  },
}));
