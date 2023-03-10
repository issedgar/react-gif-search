import React from 'react';
import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Cartoon';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        // screen.debug();
        expect( screen.getByText('Cargando ...') );
        expect( screen.getByText( category ) );      
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifList = [
            { id: 'ABC', title: 'Title 1', url: 'https://localhost/iamge1' },
            { id: 'ABD', title: 'Title 2', url: 'https://localhost/iamge2' }
        ];

        useFetchGifs.mockReturnValue({
            images: gifList,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);      
    });  
})
