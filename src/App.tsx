// src/App.js atau src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import DetilStatusPage from "./pages/detil-status-page";
import LoginPage from "./pages/sign-page/login-page";
import RegisterPage from "./pages/sign-page/register-page";
import MainLayout from "./pages/main-layout";
import TabItemProfil from "./components/tab-item-profil";
import ProfilePage from "./pages/profile-page";
import ListMedia from "./components/list-components/list-media";
import EditProfil from "./components/edit-profil-modal";
import { TabItemProvider } from "./hook/use-context-tab-item";
import { TabFollowProvider } from "./hook/use-context-followers";
import SearchPage from "./pages/search-page";
import FollowerPage from "./pages/follower-page";
import HomePage from "./pages/home-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="status" element={<DetilStatusPage />} />
        <Route
          path="profilePage"
          element={
            <TabItemProvider>
              <ProfilePage />
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

      {/* coba element */}
      <Route
        path="tabItem"
        element={
          <TabItemProvider>
            <TabItemProfil />
          </TabItemProvider>
        }
      />

      <Route
        path="tab2"
        element={
          <HomePage/>
        }
      />
      <Route path="ListMedia" element={<ListMedia />} />
      <Route path="editProfil" element={<EditProfil />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
