import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersAction, getUserDataAction } from "../redux/usersSlice"


export function CartProductCard() {
  const {users, errors} = useSelector( store => store.usersSlice )
  const dispatch = useDispatch()
  const userId = sessionStorage.getItem("id");

  useEffect( () =>{
      dispatch(getUserDataAction(userId))
  }, [dispatch, userId])
// the "console.log will have no result tell the function get the id from session storage"
 console.log(users)

  return(
    <>
      <div className="w-75 vh-100">
      <div className="row row-cols-0 row-cols-md-4 g-1 gx-2 rounded">
        hello
      </div>
      </div>
    </>
  )
}