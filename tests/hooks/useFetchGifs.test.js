import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el Hook useFetchGifs', () => {
    
    test('debe devolver el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs('Goku') );
        const { images, isLoading } = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retornar un array de imagenes y el isLoading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('Goku') );
        
        await waitFor(
           () => expect(result.current.images.length).toBeGreaterThan(0) 
        );
        
        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});