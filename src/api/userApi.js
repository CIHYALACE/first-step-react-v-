import axios from "axios";

const userUrl = "http://localhost:3005/users";


const GetAllUsers = () => axios.get(userUrl);
const GetUserData = (userId) => axios.get(`${userUrl}/${userId}`);
const addNewUser = (user) => axios.post(`${userUrl}` , user);
const updateUserData = (userId , userNewData) => axios.put(`${userUrl}/${userId}`)
const deleteUser = (userId) => axios.delete(`${userUrl}/${userId}` , userNewData);

export{
    GetAllUsers,
    GetUserData,
    addNewUser,
    updateUserData,
    deleteUser
}
