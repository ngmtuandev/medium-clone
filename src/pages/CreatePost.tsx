import { Button, Header, MceTiNyText } from "@/components";
import { useState } from "react";
import InputHookForm from "@/utils/react-hook-form-input";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm();
  const handleCreatePost = () => {
    console.log(description);
  };
  return (
    <div>
      <Header></Header>
      <div>
        <div>
          <InputHookForm
            placeholder="Title"
            register={register}
            id={"title"}
            validate={{
              required: "trường này không được bỏ trống",
            }}
            errors={errors}
            containerClassName=""
            inputClassName=""
            style=""
            type="text"
            label=""
          ></InputHookForm>
          <InputHookForm
            placeholder="Text"
            register={register}
            id={"text"}
            validate={{}}
            errors={errors}
            containerClassName=""
            inputClassName=""
            style=""
            type="text"
            label=""
          ></InputHookForm>
        </div>
        <MceTiNyText setDesc={setDescription}></MceTiNyText>
      </div>
      <div onClick={handleCreatePost}>
        <Button
          handleBtn={handleCreatePost}
          isLoading={false}
          text={"Create"}
        ></Button>
      </div>
    </div>
  );
};

export default CreatePost;
