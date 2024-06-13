import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../../../services/api";
import {  useQuery} from "@tanstack/react-query";
import { FriendCardType } from "../../type";



export default function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [searchDebounce] = useDebounce(search, 1000);
  const handleSubmitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [users, setUsers] = useState<FriendCardType[] | undefined>(undefined);

  async function getPerson() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/users?name=${searchDebounce}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("ini data baru diambil", response.data);
      setUsers(response.data);
    }
  }
  // const { mutate } = useMutation({ mutationFn: getPerson });
  // const { data: threadsByName, refetch: refetchThreadByName } = useQuery({
  //   queryKey: ["person"],
  //   queryFn: getPerson,
  // });

  useEffect(() => {
    getPerson();
  }, [searchDebounce]);

  

  return { handleSubmitChange, users,searchDebounce };
}
