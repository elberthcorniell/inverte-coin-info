import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchFilter from '../../src/components/SearchFilter';
import { Provider } from 'react-redux';
import store from '../../src/reducers';

describe('test', () => {
    test('Render as spected', () => {
        render(
            <Provider store={store}>
                <SearchFilter />
            </Provider>
        );
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});
