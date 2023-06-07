import { it } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

it("does homepage show meal recommendation text", async () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  await screen.findByText("Carbs");
});


  
  
  
  
  
  