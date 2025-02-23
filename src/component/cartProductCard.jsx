import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../redux/usersSlice"; // Import the removeFromCartAction


export function CartProductCard({ product }) {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("id");

  const handleDelete = () => {
    dispatch(removeFromCartAction({ userId, productId: product.id }));
  };

  return(
  <>
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`../public/products/${product.image}.jpg`} className="img-fluid rounded-start" alt={product.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Quantity: {product.quantity}</p>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}