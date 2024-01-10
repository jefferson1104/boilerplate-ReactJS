import { screen, render } from '@testing-library/react';

// COMPONENTS
import { Header } from './Header';

// HEADER TESTS
describe('Header Component', () => {
  it('Should render correctly', () => {
    render(<Header />);

    const heading = screen.getByText(/Boilerplate/i);

    expect(heading).toBeInTheDocument();
  });
});
