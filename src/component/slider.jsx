import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductById } from "../api/productApi";

export function Slider() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    GetProductById(id).then((response) => setProduct(response.data));
  }, []);
  let num = 1;

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={`../../public/products/${product?.image}.jpg`}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={`../../public/products/${product.image}${num + 1}.jpg`}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={`../../public/products/${product.image}${num + 2}.jpg`}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
