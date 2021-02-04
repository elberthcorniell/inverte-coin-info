import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoinCard from '../../src/components/CoinCard';

describe('test', () => {
  test('Render as spected', () => {
    render(<CoinCard
      index={1}
      name="Bitcoin"
      symbol="BTC"
      image="./"
      currentPrice={30_000}
      marketCap={600_000_000_000}
    />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('Loads and displays market cap correctly', () => {
    render(<CoinCard
      index={1}
      name="Bitcoin"
      symbol="BTC"
      image="./"
      currentPrice={30_000}
      marketCap={600_000_000_000}
    />);
    const text = screen.getAllByText('$600,000,000,000.00');
    expect(typeof text[0]).not.toBe('undefined');
  });

  test('Loads and displays current price correctly', () => {
    render(<CoinCard
      index={1}
      name="Bitcoin"
      symbol="BTC"
      image="./"
      currentPrice={30_000}
      marketCap={600_000_000_000}
    />);
    const text = screen.getAllByText('$30,000.00');
    expect(typeof text[0]).not.toBe('undefined');
  });
});
