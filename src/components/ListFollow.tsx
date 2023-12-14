import { memo } from "react";
import { Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ListFollow = ({ user }: { user: TUser }) => {
  return (
    <div className="my-4 flex items-center">
      <div>
        <Avatar
          isBordered
          color="default"
          src={user?.image ?? "https://i.pravatar.cc/150?u=a042581f4e29026024d"}
        />
      </div>
      <div className="flex-col ml-4">
        <span>{user?.username}</span>
        <div>
          <Link to={`/user/${user?.username}`}>
            <span className="text-[12px] font-medium cursor-pointer text-color-cray-200">
              Detail
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(ListFollow);
