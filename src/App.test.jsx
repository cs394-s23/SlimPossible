import { it, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Login from "/src/components/Authentication/Login";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Homepage from "/src/components/homepage/Homepage";

it("shows the login button", async () => {
  render(<App />);
  await screen.findByText("Sign in with Google");
});
