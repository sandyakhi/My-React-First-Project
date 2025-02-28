

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Milk() {
    let Milkitems = useSelector(state => state.products.Milk);
    let dispatch = useDispatch();

    let finalMilkitems = Milkitems.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <img
                    src={item.image}  // Assuming each item has an 'image' property with the URL to the image
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "150px", objectFit: "fill" }}  // Adjust image size
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch(addToCart(item))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="container my-2">
                <h1 className="mb-5 text-center">Milk Items</h1>
                <ul className="list-group">
                    {finalMilkitems}
                </ul>
            </div>
        </>
    );
}

export default Milk;
