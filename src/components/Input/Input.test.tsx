import { screen, fireEvent, render } from '@testing-library/react';

// COMPONENTS
import { Input } from './Input';

// CONTEXTS
import { ThemeProvider } from '@contexts/theme.context';

// INPUT COMPONENT TESTS
describe('Input Component', () => {
  it('should render input with label', () => {
    render(
      <ThemeProvider>
        <Input name="test" label="input test" />
      </ThemeProvider>
    );

    const label = screen.getByText(/input test/i);
    const input = screen.getByLabelText(/input test/i);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should render input with error message', () => {
    render(
      <ThemeProvider>
        <Input name="test" label="input test" errorMessage="Invalid input" />
      </ThemeProvider>
    );

    const error = screen.getByText(/invalid input/i);

    expect(error).toBeInTheDocument();
  });

  it('should disable input when disabled prop is provided', () => {
    render(
      <ThemeProvider>
        <Input name="test" label="input test" disabled />
      </ThemeProvider>
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });

  it('should handle input change', () => {
    const onChangeMock = jest.fn();
    render(
      <ThemeProvider>
        <Input name="test" label="input test" onChange={onChangeMock} />
      </ThemeProvider>
    );

    const input = screen.getByLabelText(/input test/i);

    fireEvent.change(input, { target: { value: 'abc' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('abc');
  });
});
