import { useGetTags } from "@/hooks/tag/useGetTags";
import { useTagStore } from "@/store/tagsStore";
import { memo, useEffect, useState } from "react";
import { Chip } from "@nextui-org/react";

const Tags = () => {
  const { tags, isLoading } = useGetTags();
  const [selectedTags, setSelectedTags] = useState<string>("");
  const setTags = useTagStore((state: any) => state.setTags);
  const setSelectedTag = useTagStore((state: any) => state.setSelectedTag);
  const _tags = useTagStore((state: any) => state.tags)?.slice(0, 10);
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
        {_tags?.map((tag: any) => {
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
    </div>
  );
};

export default memo(Tags);
