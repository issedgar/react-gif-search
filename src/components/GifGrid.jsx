import useFetchGifs from "../hooks/useFetchGifs";

import GifItem from "./GifItem";


export const GifGrid = ({ category }) => {

    const { images, isLoading}  = useFetchGifs( category );


    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, []);
    
    // // useEffect( () => {
    // //     getGifs(category).then( newImages => setImages(newImages));
    // // }, []);

    return (
        <>
            <h3>{ category }</h3>
            <p>Listado de GIF</p>
            {
                isLoading && (<h2>Cargando ...</h2>)
            }
            


            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            {... image}
                        />
                    ))
                }

            </div>
            
        </>
    )
}