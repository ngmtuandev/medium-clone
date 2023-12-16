import { useGetTags } from "@/hooks/tag/useGetTags";
import { useTagStore } from "@/store/tagsStore";
import { memo, useEffect, useState } from "react";
import { Chip } from "@nextui-org/react";

const Tags = () => {
  const { tags } = useGetTags();
  const [selectedTags, setSelectedTags] = useState("");
  const setTags = useTagStore((state: any) => state.setTags);
  let allTags = useTagStore((state: any) => state.tags);
  const [_tags, set_Tags] = useState(allTags?.slice(0, 10));
  const setSelectedTag = useTagStore((state: any) => state.setSelectedTag);
  useEffect(() => {
    setTags(tags);
  }, [tags]);
  const handleSeletedTag = (tag: string) => {
    const isTagSelected = selectedTags == tag;
    if (isTagSelected) {
      setSelectedTags("");
      setSelectedTag("");
    } else {
      setSelectedTags(tag);
      setSelectedTag(tag);
    }
  };
  return (
    <div className="flex-1">
      <div className="gap-3 scrollbar-none sm:flex md:flex md:flex-wrap">
        {_tags?.map((tag: { id: string; name: string }) => {
          return (
            <div key={tag?.id} className="cursor-pointer">
              <Chip
                className={`px-[8px] py-[8px] ${
                  selectedTags == tag?.id && "bg-color-cray-200 text-white"
                } content-between flex justify-center text-center items-center`}
                color={selectedTags.includes(tag?.id) ? "warning" : "primary"}
                variant="dot"
                defaultValue={tag?.id}
                onClick={() => {
                  handleSeletedTag(tag?.id);
                }}
              >
                <p className="ml-1 -mt-[3px]">{tag?.name}</p>
              </Chip>
            </div>
          );
        })}
      </div>
      <div onClick={() => set_Tags(allTags)} className="mt-4 flex justify-end">
        <span className="text-sm cursor-pointer hover:text-color-cray-200 font-semibold">
          See More Tag
        </span>
      </div>
    </div>
  );
};

export default memo(Tags);
