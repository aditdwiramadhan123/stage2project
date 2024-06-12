import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../../type";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const useGetProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const username = user.username;
  console.log("ini user loh", user)

  async function getProfile() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get( `http://localhost:3000/api/v1/user?username=${username}`, {
        headers: {
          Authorization: token,
        },
      });
      const userProfil: UserType = response.data;
      return userProfil;
    }
  }

  const { data: UserProfile, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  console.log("ini profile dari usegetprofil", UserProfile)

  return { UserProfile, refetch };
};

export default useGetProfile;
