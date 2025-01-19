import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ProfileProvider } from "./context/ProfileContext";
import HomePage from "./pages/HomePage";
import AdminPanelPage from "./pages/AdminPanelPage";
import ProfileDetailsPage from "./pages/ProfileDetailsPage";

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPanelPage />} />
            <Route path="/profile/:id" element={<ProfileDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
