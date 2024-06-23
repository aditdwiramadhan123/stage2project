import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../../type";


const useGetProfile = (username:string) => {

  async function getProfile() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get( `/api/v1/user?username=${username}`, {
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
