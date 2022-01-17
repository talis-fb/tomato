import styled from '@emotion/react'

export const ProductView = ({ name, price, description }) => {
    const Div = styled.div({
        width: '100%',
        height: '100%',
        '& > div': {
            display: 'flex'
        }
    })
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
