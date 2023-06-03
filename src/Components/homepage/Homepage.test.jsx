import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

it("If text exists", async () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  await screen.findByText("Calories");
});
