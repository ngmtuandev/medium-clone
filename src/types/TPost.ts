type TPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  author: {
    id: string;
    username: string;
    image: string | null;
  };
  bookmarks: any[]; // Thêm kiểu cho bookmarks và tags nếu cần thiết
  tags: any[];
};
