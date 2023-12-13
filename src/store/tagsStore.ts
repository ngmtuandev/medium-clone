import { create } from "zustand";

export const useTagStore = create((set) => ({
  tags: [],
  selectedTag: "",
  setTags: async (tags: any) => {
    set({ tags: tags });
  },
  setSelectedTag: (selectedTag: string) => {
    set({ selectedTag });
  },
}));
