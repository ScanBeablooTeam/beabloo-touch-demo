import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Timeout } from './Timeout';

describe('components/Timeout', () => {

  test('component renders', () => {
    render(<Timeout />)
  })

  test('timeout callback is triggered', async () => {
    const handleTimeout = jest.fn();
    render(<Timeout allowedInterval={1000} onTimeout={handleTimeout} />);

    fireEvent.click(screen.getByTestId('timeout'));

    await waitFor(() => {
      expect(handleTimeout).toHaveBeenCalledTimes(1);
    }, { timeout: 3000 });
  })

})
