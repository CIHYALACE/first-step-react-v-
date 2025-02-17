import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addNewProduct, editProduct, GetProductById } from "../api/productApi";

export function AddNewProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    image: null,
  });

  useEffect(() => {
    if (id != 0) {
      GetProductById(id)
        .then((response) => setFormData(response.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const inputHandler = (e) => {
    if (e.target.name == "image") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0].name.slice(0, -4),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const productHandler = async (e) => {
    e.preventDefault();

    if (id == 0) {
      await addNewProduct(formData);
      navigate("/products");
    } else {
      await editProduct( id , formData);
      navigate("/products");
    }
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5 fs-1 fw-bold">
          {" "}
          {id == 0 ? "Add New Product" : "Edit Product Data"}{" "}
        </h1>
        <form className="aside rounded py-5" onSubmit={productHandler}>
          <div className="mb-3 w-75 mx-auto">
            <label className="form-label">Product Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3 w-75 mx-auto">
            <label className="form-label">Product Price:</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3 w-75 mx-auto">
            <label className="form-label">Quantity: </label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={formData.quantity}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3 w-75 mx-auto">
            <label className="form-label">Product image: </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={inputHandler}
            />
          </div>

          <div className="w-75 mx-auto">
            <button type="submit" className="btn btn-custom text-dark">
              {id == 0 ? "Add New Product" : "Edit Product Data"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
