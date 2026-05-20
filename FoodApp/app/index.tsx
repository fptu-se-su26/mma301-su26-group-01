import React, { useState } from "react";

import LoginScreen from "../src/screens/LoginScreen";
import LandingScreen from "../src/screens/LandingScreen";

export default function Page() {
  const [screen, setScreen] = useState<
    "login" | "landing"
  >("login");

  if (screen === "landing") {
    return (
      <LandingScreen
        onBack={() => setScreen("login")}
      />
    );
  }

  return (
    <LoginScreen
      onLogin={() => setScreen("landing")}
    />
  );
}