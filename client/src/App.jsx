import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import FeaturesPage from "./components/Pages/FeaturesPage";
import PricingPage from "./components/Pages/PricingPage";
import CareersPage from "./components/Pages/CareersPage";
import LoginPage from "./components/Pages/LoginPage";
import WatchDemo from "./components/Pages/WatchDemo";
import Dashboard from "./components/SentimentAnalysis/SentimentDashboard";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/demo" element={<WatchDemo />} />
        {/* Login */}
        <Route
          path="/login"
          element={
            <SignedOut>
              <LoginPage />
            </SignedOut>
          }
        />

        {/* Protected dashboard */}
       <Route
  path="/dashboard"
  element={
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  }
/>

      </Route>
    </Routes>
  );
}
