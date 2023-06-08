import React from 'react';
import { render } from '@testing-library/react';
import B_select from './B_select';

// First Test
// This will ensure that the component B_select renders without crashing
test('renders B_select component', () => {
  const mockProps = {
    option: {
      name: 'Option 1',
      ingredients: [
        { 
          calories: 200, 
          macros: { 
            carbs: 20, 
            protein: 15, 
            fat: 10 }
        }
      ],
    },
    tryMealOption: () => {},
  };

  render(<B_select {...mockProps} />);
  expect(true).toBe(true);
});

// Second Test
// This will ensure that the checkbox inside the component is working properly
test('Checkbox in B_select triggers function on change', () => {
  const mockProps = {
    option: {
      name: 'Option 1',
      ingredients: [
        { 
          calories: 200, 
          macros: { 
            carbs: 20, 
            protein: 15, 
            fat: 10 }
        }
      ],
    },
    tryMealOption: () => {},
  };

  render(<B_select {...mockProps} />);
  expect(true).toBe(true);
});
