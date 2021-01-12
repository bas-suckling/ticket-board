import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders "Ticket Board" header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ticket Board/i);
  expect(linkElement).toBeInTheDocument();
});
