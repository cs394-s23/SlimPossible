import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

it("Check total macros/calorie data renders properly", async () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  await screen.findByText("Calories:");
  await screen.findByText("Carbs:");
  await screen.findByText("Fat:");
  await screen.findByText("Protein:");
});
