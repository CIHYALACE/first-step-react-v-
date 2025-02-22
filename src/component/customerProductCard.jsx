import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../redux/productsSlice";

export function CustomerProductCard() {

  const {products , isLoading , errors} = useSelector( store =>  store.productsSlice );
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProductsAction())
  },[])

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
                 <p>Code: {product.id} </p>
                  <p>Quantity: {product.quantity} </p>
                 <Link to={`${product.id}/view`} className="btn btn-custom me-1 text-dark p-2">View</Link>
                 <Link className="btn btn-custom me-1 text-dark p-2">Add To Cart</Link>
               </div>
             </div>
           </div>
        ))}

      </div>
    </div>
    </>
  );
}
