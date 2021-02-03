import {
  setCoins,
  setCoin,
  changeFilter,
} from '../../src/actions';



describe('Actions', () => {
  const coin = {
    name: 'Bitcoin',
    symbol: 'btc',
  };

  test('setCoins return the same object as state', () => {
    expect(setCoins(coin)).toEqual(coin);
  });

  test('setCoin return the same object as state', () => {
    expect(setCoin(coin)).toEqual(coin);
  });
  
  test('changeFilter return the same object as state', () => {
    expect(changeFilter('filter')).toEqual('filter');
  });

});
