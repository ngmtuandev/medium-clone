import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Button = ({ text }: { text: string }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "flex w-[30%] h-[30px] cursor-pointer hover:bg-opacity-80 justify-center items-center p-[12px] rounded-lg bg-color-cray-200"
        )
      )}
    >
      <span className="text-white">{text}</span>
    </div>
  );
};

export default Button;
