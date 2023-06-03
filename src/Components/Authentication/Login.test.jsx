import { it } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

it("does the sign in button show", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  await screen.findByText("Sign in with Google");
});
