import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Button as Btn } from "@nextui-org/react";

const Button = ({
  text,
  isLoading,
  handleBtn,
}: {
  text: string;
  isLoading: boolean;
  handleBtn: () => void;
}) => {
  const handleSubmit = () => {
    handleBtn();
  };
  return (
    <Btn
      onClick={handleSubmit}
      isLoading={isLoading}
      className={twMerge(
        clsx(
          "flex w-[40%] h-[30px] cursor-pointer hover:bg-opacity-80 justify-center items-center p-[12px] rounded-sm bg-color-cray-200"
        )
      )}
    >
      <span className="text-white text-center">{text}</span>
    </Btn>
  );
};

export default Button;
