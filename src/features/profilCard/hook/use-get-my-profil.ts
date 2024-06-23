import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../../type";
import { RootState } from "../../../redux/store/store";
import { useSelector } from "react-redux";


const useGetMyProfile = () => {

  const user = useSelector((state: RootState) => state.auth.user);
  const username = user.username;

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

  const { data: MyProfile, refetch: refetchGetMyProfile } = useQuery({
    queryKey: [`MyprofileByName`],
    queryFn: getProfile,
    staleTime: 60000, // 1 minut
  });


  return { MyProfile,refetchGetMyProfile };
};

export default useGetMyProfile;
