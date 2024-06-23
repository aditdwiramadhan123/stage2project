import { Box, Text, Button } from "@chakra-ui/react";

const EmailSentPage = () => {
  return (
    <Box width={"100vw"} height={"100vh"} bg="#1e272e" display={"flex"}>
      <Box margin={"auto"} textAlign="center">
        <Box textAlign="start" marginBottom={3}>
          <Text fontSize={20} color={"white"} fontWeight={500} margin={0}>
            Email Sent
          </Text>
        </Box>

        <Text fontSize={12} color={"white"} mb={6}>
          We have sent an email to your registered email address. Please check
          your inbox and follow the instructions to verify your email.
        </Text>

        <Button
          backgroundColor="#009432"
          width="90%"
          borderRadius={20}
          marginBottom={4}
          border="none"
          marginX="auto"
          onClick={() => window.location.href = "/login"}
        >
          Back to Login
        </Button>
      </Box>
    </Box>
  );
};

export default EmailSentPage;
