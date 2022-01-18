import styled from '@emotion/react'

// import { useDispatch } from 'react-redux'
// import { addProduct } from '../redux'

export const ProductView = ({ name, price, description }) => {
    const Div = styled.div({
        width: '100%',
        height: '100%',
        '& > div': {
            display: 'flex'
        }
    })

    // const dispatch = useDispatch()
    // const AddProductOnBag = () => {
        // dispatch(addProduct({ name, price, description }))
    // }
    return (
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <h2>{name}  |  {price}</h2>
                    <span> { description } </span>
                    <button>Add to Wishlist</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
};
