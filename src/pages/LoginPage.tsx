import InputHookForm from "@/utils/react-hook-form-input";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "@/hooks/auth/useLogin";
import { useAuth } from "@/store/authStore";
const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: $login, isPending } = useLogin();
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

  const handleSetIsLogin = useAuth((state: any) => state.setIsLogin);

  const handleLogin = () => {
    const data = getValues(); // handle submit react hook form
    $login(data, {
      onSuccess: (rs) => {
        window.localStorage.setItem("token-user-medium", rs?.token);
        handleSetIsLogin(!!localStorage.getItem("token-user-medium"));
        navigate("/");
      },
      onError: () => {
        Swal({
          title: "Đăng nhập không thành công",
          text: "Vui lòng đăng nhập lại !!!",
          icon: "warning",
        });
      },
      onSettled: () => {
        // finnally
        reset({
          username: "",
          email: "",
          password: "",
        });
      },
    });
  };

  return (
    <div className="w-[100%] h-screen flex flex-col justify-center items-center">
      <div className="md:w-[35%] sm:w-[70%] h-[67%] rounded-xl bg-gray-50 p-[20px] shadow-2xl">
        <div className="flex justify-center items-center">
          <span className="text-[40px] font-bold text-color-cray-200">Me</span>
          <span className="text-[40px] font-bold text-gray-800">dium</span>
        </div>
        <span className="justify-center items-center flex font-semibold text-gray-700">
          Login with Medium
        </span>
        <div>
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
          Login
        </Button>
        <div className="text-color-cray-200 text-[14px] font-semibold flex justify-end mr-2 mt-4">
          <NavLink to={"/sign-up"}>
            <span>Register</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
