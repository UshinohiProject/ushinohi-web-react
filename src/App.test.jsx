import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText('Ushinohi Project | 妄想あるのみ。');
  expect(logoElement).toBeInTheDocument();
});
