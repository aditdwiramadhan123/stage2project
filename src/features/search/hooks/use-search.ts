import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../../../services/api";
import { useMutation } from "@tanstack/react-query";

interface FriendCard {
  name: string;
  profilePictureUrl: null | string;
  username: string;
  isFollow: boolean;
}

export default function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [searchDebounce] = useDebounce(search, 1000);
  const handleSubmitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [users, setUsers] = useState<FriendCard[] | null>(null);

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
  const { mutate } = useMutation({ mutationFn: getPerson });

  useEffect(() => {
    mutate();
  }, [searchDebounce,mutate]);

  

  return { getPerson, handleSubmitChange, users,searchDebounce };
}
