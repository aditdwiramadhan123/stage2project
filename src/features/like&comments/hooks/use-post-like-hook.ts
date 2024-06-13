import UseLikePost from "../hooks/use-like-hook";
import { api } from "../../../services/api";
import { useMutation } from "@tanstack/react-query";
import useGetThreads from "../../thread/hooks/use-get-thread";

export default function PostLike ({isLikeParams,route}:{isLikeParams:boolean,route:string}) {
    const { isLike, changeStatus } = UseLikePost(isLikeParams);
    const token = localStorage.getItem("token");
    const {refetch} =useGetThreads()
  
    const likeClick = async () => {
      try {
        const response = await api.post(
          // scope dinamis
          route, 
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
  
    const { mutateAsync } = useMutation ({mutationFn:likeClick})
  
    const handleClick = async () => {
      changeStatus();
      await mutateAsync();
      refetch()
    };

    return {handleClick,isLike}
}