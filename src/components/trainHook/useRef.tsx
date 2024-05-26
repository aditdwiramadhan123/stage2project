import { useRef } from "react";

function myForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputRef.current?.value)
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input ref={inputRef} />
      <button type="submit"></button>
    </form>
  );
}

export default myForm
