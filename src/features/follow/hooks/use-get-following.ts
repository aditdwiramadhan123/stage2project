import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { FollowingType } from "../types";

const useGetFollowing = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user.id;

  async function getFollowing() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get( `http://localhost:3000/api/v1/getFollowing/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      const userProfil: FollowingType[] = response.data;
      return userProfil;
    }
  }

  const { data: following, refetch: refetchGetFollowing} = useQuery({
    queryKey: ["following"],
    queryFn: getFollowing,
  });

 

  return { following, refetchGetFollowing };
};

export default useGetFollowing;
