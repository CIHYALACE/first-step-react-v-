import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDataAction } from "../redux/usersSlice"


export function CartProductCard({ product }) {
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
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`../public/products/${product.image}.jpg`} className="img-fluid rounded-start" alt={product.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Quantity: {product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}