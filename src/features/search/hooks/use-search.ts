import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../../../services/api";
import {  useQuery} from "@tanstack/react-query";
import { FriendCardType } from "../../type";



export default function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [searchDebounce] = useDebounce(search, 400);
  const handleSubmitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  async function getPerson() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/users?name=${searchDebounce}`, {
        headers: {
          Authorization: token,
        },
      });
      const users:FriendCardType[] = response.data
      console.log("ini")

      return users
    }
  }
  // const { mutate } = useMutation({ mutationFn: getPerson });
  const { data: users, refetch: refetchUsers } = useQuery({
    queryKey: ["person"],
    queryFn: getPerson,
  });

  useEffect(() => {
    refetchUsers();
  }, [searchDebounce]);

  

  return { handleSubmitChange, users,searchDebounce,refetchUsers };
}
