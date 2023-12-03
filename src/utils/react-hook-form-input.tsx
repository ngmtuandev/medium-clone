import { memo } from "react";
import { Input } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const InputHookForm = ({
  type = "text",
  style = "form-input",
  placeholder,
  register,
  errors,
  containerClassName,
  inputClassName,
  validate,
  label,
  id,
}: TForm) => {
  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-col w-full gap-4 mb-6 justify-center items-center",
          containerClassName
        )
      )}
    >
      {label && (
        <label className="font-medium text-[12px] -mb-3" htmlFor={id}>
          {label}
        </label>
      )}
      <Input
        className={twMerge(
          clsx(
            inputClassName,
            style,
            "justify-center h-[35px] text-[13px] -mb-3"
          )
        )}
        {...register(id, validate)}
        key="outside"
        type={type}
        label={placeholder}
        labelPlacement="outside"
        id={id}
      />
      {errors && errors[id] && (
        <small className="-mb-3 text-red-500 font-medium">
          {errors[id].message}
        </small>
      )}
    </div>
  );
};

export default memo(InputHookForm);
