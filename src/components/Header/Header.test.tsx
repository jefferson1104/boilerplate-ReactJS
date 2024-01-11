import { screen, fireEvent, render } from '@testing-library/react';

// COMPONENTS
import { Header } from './Header';

// CONTEXTS
import { ThemeProvider } from '@contexts/theme.context';

// HEADER TESTS
describe('Header Component', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const heading = screen.getByText(/Boilerplate/i);

    expect(heading).toBeInTheDocument();
  });

  test('toggles the theme when the switch is clicked', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const switchElement = screen.getByRole('switch');

    fireEvent.click(switchElement);

    expect(switchElement).toBeChecked();
  });
});
