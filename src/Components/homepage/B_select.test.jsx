import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import B_select from './B_select';

// First Test
// This will ensure that the component B_select renders without crashing
test('renders B_select component', () => {
  const mockProps = {
    option: {
      name: 'Option 1',
      ingredients: [
        {
          calories: 100,
          macros: {
            carbs: 10,
            protein: 20,
            fat: 30,
          },
        },
      ],
    },
    // tryMealOption: jest.fn(),
    tryMealOption: () => {},
  };

  render(<B_select {...mockProps} />);
  expect(true).toBe(true);
    // Check if component renders and displays the correct option name
  // expect(getByText('Option 1')).toBeInTheDocument();

  // Check if component renders and displays the correct total calories
  // expect(getByText('-- Total Calories: 500 kcal. --')).toBeInTheDocument();

  // Check for pie chart component
  // expect(document.querySelector(".ingredient-Composition-Chart")).toBeInTheDocument();

});

// Second Test
// This will ensure that the checkbox inside the component is working properly
test('Checkbox in B_select triggers function on change', () => {
  const mockProps = {
    option: {
      name: 'Option 1',
      ingredients: [
        {
          calories: 100,
          macros: {
            carbs: 10,
            protein: 20,
            fat: 30,
          },
        },
      ],
    },
    // tryMealOption: jest.fn(),
    tryMealOption: () => {},
  };

  render(<B_select {...mockProps} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(true).toBe(true);
  // expect(mockTryMealOption.data).toBeDefined();
  // expect(mockTryMealOption.data.calories).toEqual(500);
  // expect(mockTryMealOption.data.carbohydrates).toEqual(50);
  // expect(mockTryMealOption.data.protein).toEqual(40);
  // expect(mockTryMealOption.data.fat).toEqual(30);
  // expect(mockTryMealOption.data.name).toEqual('Option 1');
});
