import { api } from "../../../services/api";
import { useMutation } from "@tanstack/react-query";
import useFollowFriend from "../../../hook/use-folllow-friend";

export default function useFollow ({isFollowParams,followingId}:{isFollowParams:boolean,followingId:number}) {
    const { isFollow, changeStatus } = useFollowFriend(isFollowParams);
    const token = localStorage.getItem("token");
  
    const onClick = async () => {
      try {
        const response = await api.post(
          `http://localhost:3000/api/v1/follow/${followingId}`,
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );
  
        console.log(response);
        return Response
      } catch (error) {
        console.error;
        return error
      }
      
    };
  
    const { mutateAsync } = useMutation ({mutationFn:onClick})
  
    const handleClick = async () => {
      changeStatus();
      await mutateAsync();
    };


    return {handleClick,isFollow}
}