import { useState } from "react";
import { Card } from "@tomato/components";

import { ProductView } from './ProductView';

import { ProductCard } from '../styles'

const style = {
    width: '100%',
    display: 'flex',
    padding: '10px',
    gap: '20px'
}

export const Shop = () => {
    const exemplo = [{name:'Vinho bom', price: 100, description: 'aa'}, {name:'Vinho igual bom', price: 101, description: 'bb'},{name:'Vinho mt bom', price: 300, description: 'bb'}]

    const [ seeing, setSeeing ] = useState({});

    return (
        <div sx={style}>
            { seeing.name ? <ProductView name={seeing.name} price={seeing.price} description={seeing.description} /> : '' }
            {exemplo.map( i => <ProductCard key={i.name} click={ () => setSeeing(i) } name={i.name} price={i.price} />)}
        </div>
    )
};
