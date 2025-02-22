import axios from "axios";

const baseUrl = "http://localhost:3005/shoes";

const userUrl = "http://localhost:3005/users";

const GetAllProducts = () => axios.get(baseUrl);
const GetProductById = (productId) => axios.get(`${baseUrl}/${productId}`);
const addNewProduct = (product) => axios.post(`${baseUrl}`, product);
const editProduct = (productId, product) => axios.put(`${baseUrl}/${productId}`, product);
const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);

const GetAllUsers = () => axios.get(userUrl);
const GetUserById = (userId) => axios.get(`${userUrl}/${userId}`);
const addNewUser = (user) => axios.post(`${userUrl}` , user);
const editUser = (userId , user) => axios.put(`${userUrl}/${userId}`, user)
const deleteUser = (userId) => axios.delete(`${userUrl}/${userId}`);


export {
  GetAllProducts,
  GetProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};
