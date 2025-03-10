import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, getAllProductsAction } from "../redux/productsSlice";

export function AdminProductCard() {

  const {products , isLoading , errors} = useSelector( store => store.productsSlice)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllProductsAction())
  }, []);

  const deleteHandeler = async (productId) => {
    dispatch(deleteProductAction(productId))
  };

  return (
    <>
      <div className="w-75 vh-100">
      <div className="row row-cols-0 row-cols-md-4 g-1 gx-2 rounded">
        {isLoading && <div className="loader"></div>}
        {products.map( (product) => (
               <div className="col" key={product.id}>
              <div className="card h-100">
                <img src={`../public/products/${product.image}.jpg`} className="card-img-top " alt="..." />
                <div className="card-body ">
                  <h5 className="card-title"> {product.name} </h5>
                 <p>Id: {product.id} </p>
                  <p>Quantity: {product.quantity} </p>
                 <Link to={`${product.id}/edit`} className="btn btn-custom me-1 text-dark p-2">Edit</Link>
                 <Link to={`${product.id}/view`} className="btn btn-custom me-1 text-dark p-2">View</Link>
                 <a className="btn btn-danger me-1 p-2" onClick={()=>{deleteHandeler( product.id )}}>Delete</a>
               </div>
             </div>
           </div>
        ))}

      </div>
    </div>
    </>
  );
}
