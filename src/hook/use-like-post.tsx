import {useState} from 'react'

function UseLikePost() {
    let [isLike, setIsLike] = useState<boolean>(false);
    const changeStatus = () => {
      setIsLike(!isLike);
    };
  return {isLike,changeStatus}
}

export default UseLikePost