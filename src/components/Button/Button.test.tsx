import { screen, fireEvent, render } from '@testing-library/react';

// COMPONENTS
import { Button } from './Button';

// CONTEXTS
import { ThemeProvider } from '@contexts/theme.context';

// BUTTON COMPONENT TESTS
describe('Button Component', () => {
  it('should render button', () => {
    render(
      <ThemeProvider>
        <Button text="button test" />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: 'button test' });

    expect(button).toBeInTheDocument();
  });

  it('should call onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <ThemeProvider>
        <Button text="button test" onClick={onClickMock} />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: 'button test' });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
