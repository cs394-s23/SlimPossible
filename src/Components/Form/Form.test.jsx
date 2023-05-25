import { it, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

it("shows the login button", async () => {
  render(<Form />);
  await screen.findByText("Sign in with Google");
});
