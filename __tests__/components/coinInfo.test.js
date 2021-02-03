import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import CoinInfo from '../../src/components/CoinInfo';
import store from '../../src/reducers';

describe('test', () => {
  const renderCoinInfo = () => {
    store.dispatch({
      type: 'SET_COIN',
      coin: {
        name: 'Bitcoin',
        symbol: 'BTC',
        links: {
          homepage: ['inverte.io'],
          repos_url: {
            Github: 'github.com',
          },
        },
        categories: ['Coin'],
      },
    });
    render(
      <Provider store={store}>
        <CoinInfo />
      </Provider>,
    );
  };

  test('Render as spected', () => {
    renderCoinInfo();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('It contains a Canvas', () => {
    renderCoinInfo();
    const canvas = document.getElementsByTagName('canvas');
    expect(typeof canvas[0]).not.toBe('undefined');
  });

  test('It contains a grid', () => {
    renderCoinInfo();
    const grid = document.getElementsByClassName('grid-1-2');
    expect(typeof grid[0]).not.toBe('undefined');
  });
});
