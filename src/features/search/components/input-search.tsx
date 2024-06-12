import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";

function SearchInput({handleSubmitChange}:{handleSubmitChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {

  return (
    <InputGroup bg={"none"} marginY={5} width={"90%"} mx={"auto"}>
      <InputLeftElement
        pointerEvents="none"
        children={<FaUserFriends color="white" />} // Menyertakan ikon di sebelah kiri input
      />
      <Input
        px={10}
        fontSize={12}
        color={"white"}
        borderRadius={30}
        placeholder="Search your friend"
        onChange={handleSubmitChange}
      />
    </InputGroup>
  );
}

export default SearchInput;
