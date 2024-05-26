import { useState } from "react";

function ShowCard() {
  let [isShowed, setIsShowed] = useState<boolean>(false);
  if (isShowed) {
    return (
      <div>
        <h1>ini card</h1>
        <button
          onClick={() => {
            setIsShowed((isShowed = false));
          }}
        >
          hilangkan kartu
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => {
          setIsShowed((isShowed = true));
        }}
      >
        munculkan kartu
      </button>
    );
  }
}

export default ShowCard;
