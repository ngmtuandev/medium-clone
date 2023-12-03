import InputHookForm from "@/utils/react-hook-form-input";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { useSignup } from "@/hooks/auth/useSignup";
import Swal from "sweetalert";
import { NavLink, useNavigate } from "react-router-dom";
const SignupPage = () => {
  const { mutate: $signup, isPending } = useSignup();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleLogin = () => {
    const data = getValues();
    $signup(data, {
      onSuccess: () => {
        Swal({
          title: "Đăng ký tài khoản thành công",
          text: "Vui lòng đăng nhập !",
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
      },
      onError: () => {
        Swal({
          title: "Tạo tài khoản thất bại",
          text: "Vui lòng tạo lại tài khoản mới",
          icon: "warning",
        });
      },
    });
    reset({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-[100%] h-screen flex flex-col justify-center items-center">
      <div className="w-[35%] h-[80%] rounded-xl bg-gray-50 p-[20px] shadow-2xl">
        <div className="flex justify-center items-center">
          <span className="text-[40px] font-bold text-color-cray-200">Me</span>
          <span className="text-[40px] font-bold text-gray-800">dium</span>
        </div>
        <span className="justify-center items-center flex font-semibold text-gray-700">
          Đăng ký vào Medium
        </span>
        <div>
          <InputHookForm
            placeholder="Username"
            register={register}
            id="username"
            validate={{
              required: "trường này không được bỏ trống",
            }}
            containerClassName=""
            inputClassName=""
            errors={errors}
            style=""
            type="text"
            label=""
          ></InputHookForm>
          <InputHookForm
            placeholder="Email"
            register={register}
            id={"email"}
            validate={{
              required: "trường này không được bỏ trống",
            }}
            errors={errors}
            containerClassName=""
            inputClassName=""
            style=""
            type="email"
            label=""
          ></InputHookForm>
          <InputHookForm
            placeholder="Password"
            register={register}
            id="password"
            validate={{
              required: "trường này không được bỏ trống",
            }}
            errors={errors}
            containerClassName=""
            inputClassName=""
            style=""
            type="password"
            label=""
          ></InputHookForm>
        </div>

        <Button
          onClick={handleSubmit(handleLogin)}
          color="primary"
          isLoading={isPending}
          fullWidth
          className="mt-3"
        >
          Đăng ký
        </Button>
        <div className="text-color-cray-200 text-[14px] font-semibold flex justify-end mr-2 mt-4">
          <NavLink to={"/login"}>
            <span>Đăng nhập</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
