import { api } from "../../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { FriendCardType } from "../../../type";


const useGetSuggestFriends = () => {

  async function GetSuggestFriends() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/suggestFriend`, {
        headers: {
          Authorization: token,
        },
      });
      const userProfil: FriendCardType[] = response.data;
      return userProfil;
    }
  }

  const { data: SuggestFriends, refetch: refetchSuggestFriends} = useQuery({
    queryKey: ["SuggestFriends"],
    queryFn: GetSuggestFriends,
  });

 

  return { SuggestFriends, refetchSuggestFriends };
};

export default useGetSuggestFriends;
