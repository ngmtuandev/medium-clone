import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApiSignUp } from "@/apis/auth/authApi";

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TInput) => authApiSignUp(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
