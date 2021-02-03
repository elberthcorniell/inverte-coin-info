import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../../src/components/NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('test', () => {
    test('Render as spected', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});
