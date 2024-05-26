import React from "react";
import { Box, FormControl, Input, Button, Text, Link } from "@chakra-ui/react";

export default function SignPage() {
  return (
    <Box width={"100vw"} height={"100vh"} bg="#1e272e" display={"flex"}>
      <Box margin={"auto"} textAlign="center" width={400}>
        <Box textAlign="start" marginBottom={3}>
          <Text
            fontSize={50}
            color={"#009432"}
            fontWeight={500}
            margin={0}
            mb={-1}
          >
            circle
          </Text>
          <Text fontSize={30} color={"white"} fontWeight={500} margin={0}>
            Create account Circle
          </Text>
        </Box>

        <FormControl>
          <Input
            id="fullname"
            type="text"
            placeholder="fullname *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
          />

          <Input
            id="email"
            type="text"
            placeholder="email *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
          />

          <Input
            id="password"
            type="password"
            placeholder="Password *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
          />
          <Text color="white" mb={2} textAlign="end">
            <Link>Forgot password?</Link>
          </Text>
          <Button
            backgroundColor="#009432"
            width={"90%"}
            borderRadius={20}
            type="submit"
            mb={4}
          >
            Create
          </Button>
        </FormControl>
        <Text color="white" mt={2} textAlign={"start"}>
         Already have an account? 
          <Link color={"#009432"}> Login</Link>
        </Text>
      </Box>
    </Box>
  );
}
