import axios from "axios";

const userUrl = "http://localhost:3005/users";


const GetAllUsers = () => axios.get(userUrl);
const GetUserById = (userId) => axios.get(`${userUrl}/${userId}`);
const addNewUser = (user) => axios.post(`${userUrl}` , user);
const editUser = (userId , user) => axios.put(`${userUrl}/${userId}`, user)
const deleteUser = (userId) => axios.delete(`${userUrl}/${userId}`);

export{
    GetAllUsers,
    GetUserById,
    addNewUser,
    editUser,
    deleteUser
}
