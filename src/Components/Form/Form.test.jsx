import { it, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchForm from "./Form";
import Homepage from "../homepage/Homepage";
import { BrowserRouter } from "react-router-dom";

it("If text exists", async () => {
  render(<BrowserRouter> <SearchForm /> </BrowserRouter>);
  await screen.findByText("Submit");
  await screen.findByText("✨ Favourite Meal?");
  await screen.findByPlaceholderText("Your meal name");
  await screen.findByPlaceholderText("Ingredient name, brand name(optional)");
});

it("If ingredient search returns (Egg), and result stays", async () => {
    render(<BrowserRouter> <SearchForm /> </BrowserRouter>);
    await screen.findByText("Submit");
    await screen.findByText("✨ Favourite Meal?");
    await fireEvent.change(screen.getByTestId("ingredient-search-input"), {
        target: { value: "egg" },
    });
    await fireEvent.click(screen.getByTestId("ingredient-search-button"));
    await waitFor(() => expect(screen.findByText("egg")));
});

it("If ingredient search returns (White Bread)", async () => {
    render(<BrowserRouter> <SearchForm /> </BrowserRouter>);
    await screen.findByText("Submit");
    await screen.findByText("✨ Favourite Meal?");
    await fireEvent.change(screen.getByTestId("ingredient-search-input"), {
        target: { value: "White Bread" },
    });
    await fireEvent.click(screen.getByTestId("ingredient-search-button"));
    await waitFor(() => expect(screen.findByText("Target Stores")));
    }
);

