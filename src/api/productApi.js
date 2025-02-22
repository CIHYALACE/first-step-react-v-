import axios from "axios";

const baseUrl = "http://localhost:3005/shoes";

const GetAllProducts = () => axios.get(baseUrl);
const GetProductById = (productId) => axios.get(`${baseUrl}/${productId}`);
const addNewProduct = (product) => axios.post(`${baseUrl}`, product);
const editProduct = (productId, product) => axios.put(`${baseUrl}/${productId}`, product);
const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);



export {
  GetAllProducts,
  GetProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};
