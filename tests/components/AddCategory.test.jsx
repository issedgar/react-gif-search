import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'cambio valor' } } );
        expect( input.value ).toBe('cambio valor');      
    });    

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Valor inicial';
        const onNewCategoryMock = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategoryMock } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');
        expect( onNewCategoryMock ).toHaveBeenCalled();
        expect( onNewCategoryMock ).toHaveBeenCalledTimes(1);
        expect( onNewCategoryMock ).toHaveBeenCalledWith( inputValue );      
    });

    test('no debe de llamar el onNewCategory si el input está vacío', () => {
        const onNewCategoryMock = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategoryMock } /> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategoryMock ).toHaveBeenCalledTimes(0);
        expect( onNewCategoryMock ).not.toHaveBeenCalled();      
    });    
  
})
