import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

it('shows the schedule year', async () => {
    render(<App />);
    await screen.findByText(/2018-2019/);
  });