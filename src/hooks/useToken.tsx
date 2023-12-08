import { useLocalStorage } from "react-use";
const useToken = () => {
  const [token, setToken] = useLocalStorage("token-user-medium", "");
  return { token, setToken };
};

export default useToken;
