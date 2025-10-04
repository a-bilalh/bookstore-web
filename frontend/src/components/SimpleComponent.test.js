import { render, screen } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';
import '@testing-library/jest-dom';

test('renders hello text', () => {
  render(<SimpleComponent />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});