import {useState} from 'react'

function UseLikePost(like:boolean) {
    let [isLike, setIsLike] = useState<boolean>(like);
    const changeStatus = () => {
      setIsLike(!isLike);
    };
  return {isLike,changeStatus}
}

export default UseLikePost