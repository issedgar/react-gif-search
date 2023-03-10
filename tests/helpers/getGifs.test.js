import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba en getGifs()', () => {

    test('debe retornar un arreglo de gif', async () => {

        const gifList = await getGifs('One Punch');
        expect( gifList.length ).toBeGreaterThan( 0 );
        expect( gifList[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
      
    })
    
  
})
