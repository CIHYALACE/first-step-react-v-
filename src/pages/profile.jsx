import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

export function Profile(){
    const navigate = useNavigate()

    const logoutHandler =() =>{
        sessionStorage.clear()
           Swal.fire({
              title: "Loged Out!",
              text: "You loGed Out Successfully!",
              icon: "success",
              willClose: () => {
                navigate("/")
                window.location.reload();
              }
            });

    }


    return(
        <>
        <div className="contianer mx-auto ">
            <h1>profile</h1>
            <button className="btn btn-dark" onClick={logoutHandler}>Logut</button>
        </div>
        </>
    )
}