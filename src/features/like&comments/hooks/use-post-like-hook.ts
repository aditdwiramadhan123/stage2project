import UseLikePost from "../hooks/use-like-hook";
import { api } from "../../../services/api";
import { useMutation } from "@tanstack/react-query";


export default function PostLike ({countLikes,itemId,isLikeParams,cardFor}:{countLikes:number,itemId:number,isLikeParams:boolean,cardFor:"comment"|"thread"}) {
    const { isLike, changeStatus,viewCountLike } = UseLikePost(isLikeParams,countLikes);
    const token = localStorage.getItem("token");
    let route: string;

    if (cardFor=="comment") {
      route = `/api/v1/like-comment/${itemId}`
    }

    else if (cardFor=="thread") {
      route = `/api/v1/like/${itemId}`

    }
  
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
  
        return response
      } catch (error) {
        console.error;
        return error
      }
      
    };
  
    const { mutateAsync } = useMutation ({mutationFn:likeClick})
  
    const handleClick = async () => {
      changeStatus();
      await mutateAsync();
    };

    return {handleClick,isLike,viewCountLike}
}