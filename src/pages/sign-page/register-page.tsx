import { useState } from "react";
import { Box, FormControl, Input, Text, Link, Button, } from "@chakra-ui/react";
import { api } from "../../services/api";
import { useLoginContext } from "../../hook/use-context-login";
import { SET_USER } from "../../redux/slice/auth";
import { useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

interface RegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
}

const registerSchema = z.object({
  name: z
    .string({ message: "name must be a string" })
    .min(2, { message: "name must be at least 2 characters" })
    .max(50, { message: "name must be at most 50 characters" }),
  username: z
    .string({ message: "username must be a string" })
    .min(3, { message: "username must be at least 3 characters" })
    .max(30, { message: "username must be at most 30 characters" }),
  email: z
    .string({ message: "Email must be a string" })
    .email({ message: "Email not valid" }),
  password: z
    .string({ message: "Password must be a string" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function RegisterPage() {
  const { isLogin, setIsLogin } = useLoginContext();
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onSubmit",
    resolver: zodResolver(registerSchema),
  });
  const [error, setError] = useState<string | null>(null);

  // Handle form submission

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      const response = await api.post(
        "/api/v1/register",
        data
      );
      navigate("/email-sent-page"); // Redirect after successful registration
      const token = response.data.token;
      const user = response.data.userDB;
      const isVerified = response.data.userDB.isVerified

      if (token && isVerified) {
        localStorage.setItem("token", `Bearer ${token}`);
        dispatch(SET_USER(user));
        setIsLogin(true);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
       
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        setError(message);
        console.error("Error registering:", message);
      } else {
        setError("An unexpected error occurred.");
        console.error("Error registering:", error);
      }
    }
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  console.log(errors);

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

        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Fullname *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
            {...register("name")}
          />

          <Input
            type="text"
            placeholder="Username *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
            {...register("username")}
          />

          <Input
            type="email"
            placeholder="Email *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
            {...register("email")}
          />

          <Input
            type="password"
            placeholder="Password *"
            color="white"
            bg="#485460"
            border="none"
            mb={3}
            {...register("password")}
          />
          <Text color="white" mb={2} textAlign="end">
            <Link>Forgot password?</Link>
          </Text>

          {errors.name?.message ? (
            <Text color="red.500" mb={2}>
              {errors.name.message}
            </Text>
          ) : errors.username?.message ? (
            <Text color="red.500" mb={2}>
              {errors.username.message}
            </Text>
          ) : errors.email?.message ? (
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

          <Button
            type="submit"
            backgroundColor="#009432"
            width="90%"
            borderRadius={20}
            marginBottom={4}
            border="none"
            marginX="auto"
          >
            Sign Up
          </Button>
          
        </FormControl>
        <Text color="white" mt={2} textAlign={"start"}>
          Already have an account?
          <Link color={"#009432"} href="/login">
            {" "}
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
