import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GiftExpertApp />);
        expect( container ).toMatchSnapshot();
    });
    
    test('debe mostrar el titulo GifExpertApp', () => {
        
        render(<GiftExpertApp />);
        screen.debug();
        const title = screen.getByText('GiftExpertApp');

        expect(title).toBeTruthy();
    });
});