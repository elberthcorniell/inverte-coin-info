import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/containers/Home';
import { Provider } from 'react-redux';
import store from '../src/reducers';

describe('test', () => {
  test('Render as spected', () => {
    render(<Provider store={store}>
    </Provider>);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

});
