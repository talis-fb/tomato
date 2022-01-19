import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from '@tomato/components'
import styled from '@emotion/styled'

const List = styled.div({
    display: 'flex',
    flexDirection: 'row',
    '.product': {
        width: '100%',
        maxHeight: '70px',
        display: 'flex',
        justifyContent: 'space-between',
    }
})

export const ItensBag = (props) => {
    const ITENS = useSelector( state => state["products"] )

    const ITENS_ARRAY = Object.keys(ITENS).map( i => ({ ...ITENS[i], name: i }) );

    const dispatch = useDispatch()
        
    const delete_item = (nameForDelete) => {
        const produtos_validos = ITENS_ARRAY
            .filter( item => item.name!==nameForDelete  )
            .map( nameValid => ITENS[nameValid] )

        console.log( { ...produtos_validos } )
        // dispatch(ACTIONS.products.changeState({})) 
    }

    console.log('BAAG')
    console.log(ITENS)
    console.log(ITENS_ARRAY)

    return (
        <List>
            {ITENS_ARRAY.map( i => {
                <div key={i.name} className="product">
                    <span>{i.name}</span>
                    {/* <div> */}
                    {/* <span>{i.quant}</span> */}
                    <button onClick={() => delete_item(i.name)}></button>
                    {/* </div> */}
                </div>
            } )}
        </List>
    )
};
