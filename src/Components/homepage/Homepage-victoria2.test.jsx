import { it } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

it("Check calorie input", async () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  await screen.findByPlaceholderText("Enter Your Calorie Goal Today (kcal)...");
  await fireEvent.change(screen.getByTestId("calorie-input"), {
    target: { value: "1800" },
  });
});
