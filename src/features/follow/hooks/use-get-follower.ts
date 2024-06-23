import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { FriendCardType } from "../../type";

const useGetFollower = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user.id;

  async function getFollower() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/getFollower/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      const userProfil: FriendCardType[] = response.data;
      return userProfil;
    }
  }

  const { data: follower, refetch: refetchGetFollower } = useQuery({
    queryKey: ["follower"],
    queryFn: getFollower,
  });

 

  return { follower, refetchGetFollower };
};

export default useGetFollower;
