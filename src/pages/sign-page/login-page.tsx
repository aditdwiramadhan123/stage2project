import React, { useState } from "react";
import { Box, FormControl, Input, Text, Link } from "@chakra-ui/react";
import { api } from "../../services/api";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/slice/auth";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../hook/use-context-login";
import { useToast } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface LoginForm {
  email: string;
  password: string;
}

const loginSchema = z.object({
  email: z
    .string({ message: "Email must be a string" })
    .email({ message: "Email not valid" }),
  password: z
    .string({ message: "Password must be a string" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginPage() {
  const { isLogin, setIsLogin } = useLoginContext();
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Handle form submission
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const response = await api.post(
        "http://localhost:3000/api/v1/login",
        data
      );
      const token = response.data.token;
      const user = response.data.userDB;
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
        dispatch(SET_USER(user));
        console.log("Login successful nih:", response.data);
        toast({
          title: "Login succesed.",
          description: "Let enjoy the app",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setIsLogin(true);
      }

      // Handle success (e.g., redirect to another page)
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Failed to login. Please check your email and password.");
    }
  };

  if (isLogin) {
    return navigate("/");
  }

  console.log(errors);
  return (
    <Box width={"100vw"} height={"100vh"} bg="#1e272e" display={"flex"}>
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

        <FormControl
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          display={"flex"}
          flexDirection={"column"}
          width={450}
        >
          <Input
            type="text"
            placeholder={"Username/Email *"}
            color={"white"}
            bg="#485460"
            border="none"
            mb={3}
            {...register("email")}
            width={"100%"}
          />

          <Input
            type="password"
            placeholder={"Password *"}
            color={"white"}
            bg="#485460"
            border="none"
            mb={3}
            {...register("password")}
            width={"100%"}
          />

          {errors.email?.message ? (
            <Text color="red.500" mb={2}>
              {errors.email.message}
            </Text>
          ) : errors.password?.message ? (
            <Text color="red.500" mb={2}>
              {errors.password.message}
            </Text>
          ) : error ? (
            <Text color="red.500" mb={2}>
              {error}
            </Text>
          ) : null}


          <Input
            type="submit"
            backgroundColor="#009432"
            width={"90%"}
            borderRadius={20}
            mb={4}
            value={"Sign in"}
            border={"none"}
            fontWeight={600}
            cursor={"pointer"}
            marginX={"auto"}
          />
        </FormControl>
        <Text color="white" mt={2}>
          Don't have an account yet?{" "}
          <Link color={"#009432"} href="/register">
            Create account
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
