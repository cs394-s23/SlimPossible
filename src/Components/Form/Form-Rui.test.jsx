import { it } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form";
import { BrowserRouter } from "react-router-dom";

it("does form show have submit button", async () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  await screen.findByText("Submit");
});


  
  
  
  
  
  