// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// import { Card, crud, Flex, Image, Spinner } from "@tomato/components";
import { Card } from "@tomato/components";


const Vinho = ({ name, price }) => {
    return(
        <Card>
            <img src="" alt="" />
            <div>{name}</div>
            <div>R$ {price}</div>
        </div>
    )
}


export const List = () => {

    const exemplo = [{name:'Vinho bom', price: 100}, {name:'Vinho bom', price: 100},{name:'Vinho bom', price: 100}]


    return (
        <div>
            {exemplo.map( i => <Vinho name={i.name} price={i.price} />)}
        </div>
    )
};
