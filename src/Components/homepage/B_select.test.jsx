import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import B_select from './B_select';
import jest from 'jest';

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
    tryMealOption: jest.fn(),
  };

  render(<B_select {...mockProps} />);
  expect(screen.getByText('Option 1')).toBeInTheDocument();
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
    tryMealOption: jest.fn(),
  };

  render(<B_select {...mockProps} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(mockProps.tryMealOption).toHaveBeenCalledTimes(1);
});
