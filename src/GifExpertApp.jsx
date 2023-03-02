import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cartoon', 'Car']);

    const onAddCategory = (eventNewCategory) => {

        if( categories.includes(eventNewCategory)) return;
        
        setCategories( cat => [eventNewCategory, ...cat] );
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            < AddCategory onNewCategory = { onAddCategory } />
            
            { 
                categories.map( category => (  <GifGrid key={ category } category={ category } /> ) )
            }
            
        </>
    )
}

export default GifExpertApp
