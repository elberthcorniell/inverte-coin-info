import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import SearchFilter from '../../src/components/SearchFilter';
import store from '../../src/reducers';

describe('test', () => {
  test('Render as spected', () => {
    render(
      <Provider store={store}>
        <SearchFilter />
      </Provider>,
    );
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
