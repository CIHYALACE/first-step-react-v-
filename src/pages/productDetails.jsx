import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { GetProductById } from "../api/productApi";
import { Slider } from "../component/slider";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    GetProductById(id).then((response) => setProduct(response.data));
  }, []);
  let role = "customer"

  return (
    <>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-md-6 ">
            <Slider />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3 text-dark"> {product?.name} </h1>
            <div className="mb-3">
              <span className="h4 me-2 text-dark">{`${product?.price}$`}</span>
            </div>

            <p className="mb-4">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones. Perfect for music
              lovers and frequent travelers.
            </p>

            <div className="mb-3 ">
              <i className="fa fa-star text-warning fw-bold"></i>
              <i className="fa fa-star text-warning fw-bold"></i>
              <i className="fa fa-star text-warning fw-bold"></i>
              <i className="fa fa-star text-warning fw-bold"></i>
              <i className="fa fa-star-half text-warning fw-bold"></i>
              <span className="ms-2 text-secondary">4.5 (120 reviews)</span>
            </div>

            <div className="mb-4">
              <p className="form-label">{`Quantity: ${product?.quantity} Peaces.`}</p>
            </div>

            <Link to={role == "admin"?"/products":"/"} className="btn btn-custom text-secondary">
              Back To Products List
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
