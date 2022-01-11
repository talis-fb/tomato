
export const ProductView = ({ name, price, description }) => {
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
