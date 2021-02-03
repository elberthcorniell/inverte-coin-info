import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../src/components/Footer';

describe('test', () => {
    test('Render as spected', () => {
        render(<Footer />);
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});
