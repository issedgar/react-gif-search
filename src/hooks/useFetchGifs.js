import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    // useEffect: Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    };
}

export default useFetchGifs;

