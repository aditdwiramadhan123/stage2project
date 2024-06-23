// src/App.js or src/App.tsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER } from "./redux/slice/auth";
import { api } from "./services/api";

import Home from "./features/home/main-page/home-page";
import DetilStatusPage from "./features/status-page/main-page/detil-status-page";
import LoginPage from "./pages/sign-page/login-page";
import RegisterPage from "./pages/sign-page/register-page";
import MainLayout from "./features/main-layout/main-layout";
import ProfilePage from "./features/profil/main-page/profile-page";
import SearchPage from "./features/search/main-page/search-page";
import FollowerPage from "./features/follow/main-page/follow-page";
import HomePage from "./features/home/main-page/home-page";
import TabItemProfil from "./components/tab-item-profil";
import UserProfilePage from "./features/friend-profile/main-page/profile-page";
import { TabItemProvider } from "./hook/use-context-tab-item";
import { TabFollowProvider } from "./hook/use-context-followers";
import { Box, Spinner } from "@chakra-ui/react";
import { useLoginContext } from "./hook/use-context-login";
import EmailSentPage from "./pages/sign-page/email-sent-page ";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLogin, setIsLogin} = useLoginContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (isLoading)
      return (
        <Box width={"100vw"} height={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} bg={"brand.primary"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      );
    return isLogin ? children : <Navigate to="/login" />;
  };

  async function authCheck() {
    console.log("Proses authCheck");
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await api.get("/api/v1/check", {
          headers: {
            Authorization: token,
          },
        });
        dispatch(SET_USER(response.data));
        setIsLogin(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error dari auth", error);
      localStorage.removeItem("token");
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("isLogin has changed:", isLogin);
  }, [isLogin]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="status/:threadId" element={<DetilStatusPage />} />
        <Route
          path="profilePage"
          element={
            <TabItemProvider>
              <ProfilePage />
            </TabItemProvider>
          }
        />
               <Route
          path="profile/:usernameParams"
          element={
            <TabItemProvider>
              <UserProfilePage />
            </TabItemProvider>
          }
        />
        <Route path="search" element={<SearchPage />} />
        <Route
          path="listFollow"
          element={
            <TabFollowProvider>
              <FollowerPage />
            </TabFollowProvider>
          }
        />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="email-sent-page" element={<EmailSentPage />} />

      {/* Test elements */}
      <Route
        path="tabItem"
        element={
          <TabItemProvider>
            <TabItemProfil />
          </TabItemProvider>
        }
      />
      <Route path="tab2" element={<HomePage />} />
    </Routes>
  );
}

export default App;
