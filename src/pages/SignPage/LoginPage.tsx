import React from "react";
import { Box, FormControl, Input, Button, Text, Link } from "@chakra-ui/react";

export default function SignPage() {
  return (
    <Box width={"100vw"} height={"100vh"} bg="#2C3A47" display={"flex"}>
      <Box margin={"auto"} textAlign="center">
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
            Login to circle
          </Text>
        </Box>

        <FormControl>
          <Input
            id="username"
            type="text"
            placeholder="Username/Email *"
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
          <Text color="white" mb={2}  textAlign="end">
            <Link>Forgot password?</Link>
          </Text>
          <Button
            backgroundColor="#009432"
            width={"90%"}
            borderRadius={20}
            type="submit"
            mb={4}
          >
            Sign in
          </Button>
        </FormControl>
        <Text color="white" mt={2}>
          Don't have an account yet? <Link color={"#009432"}>Create account</Link>
        </Text>
      </Box>
    </Box>
  );
}
