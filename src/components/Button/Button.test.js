import { screen, render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('components/Button', () => {

  const _ButtonProps = {
    id: 1,
    label: 'hello there',
    color: 'red'
  }

  test('renders component', () => {
    render(<Button {..._ButtonProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  
  test('renders all props', () => {
    render(<Button {..._ButtonProps} />);

    expect(screen.getByText(_ButtonProps.label)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveStyle(`background: ${_ButtonProps.color}`);
  })


  test('handles on click', () => {
    const handleClick = jest.fn();

    render(<Button {..._ButtonProps} onClick={handleClick} />);

    fireEvent.click(screen.getByTestId('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  })

})