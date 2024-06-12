import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { FollowerType } from "../types";

const useGetFollower = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user.id;

  async function getFollower() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get( `http://localhost:3000/api/v1/getFollower/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      const userProfil: FollowerType[] = response.data;
      return userProfil;
    }
  }

  const { data: follower, refetch } = useQuery({
    queryKey: ["follower"],
    queryFn: getFollower,
  });

 

  return { follower, refetch };
};

export default useGetFollower;
