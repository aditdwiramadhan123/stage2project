import { Box, Text } from "@chakra-ui/react";

export default function NoResultSearch({name}:{name:string}) {
  return (
    <Box
      height={300}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
    >
      <Text textAlign={"center"} fontSize={18} color={"white"} fontWeight={500} mb={3}>
        No result for "{name}"
      </Text>
      <Text textAlign={"center"} fontSize={12} color={"gray.500"}>
        Try searhing for something else or check of <br />
        spelling of what you typed
      </Text>
    </Box>
  );
}
