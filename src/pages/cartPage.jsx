import { useDispatch, useSelector } from "react-redux";
import { Aside } from "../component/Aside";
import { CartProductCard } from "../component/cartProductCard";
import { useEffect } from "react";
import { getUserDataAction } from "../redux/usersSlice";
export function Cart() {

  const { cartData , error } = useSelector((store) => store.usersSlice);
  const dispatch = useDispatch();
  let role  = sessionStorage.getItem("role")
  const userId = sessionStorage.getItem("id");

  console.log(userId);

   // Fetch user data (including cart data) when the component mounts or userId changes
   useEffect(() => {
    if (userId) {
      dispatch(getUserDataAction(userId));
      console.log("User data fetched");
    }
  }, [dispatch, userId]);
  
  useEffect(() => {
    console.log("Cart data updated:", cartData);
  }, [cartData]);

  return (
    <>
    <div className="bg-image">
      <h1 className="text-center fs-1 fw-bold text-light custom-bg">Your Cart</h1>
      <div className="row my-1 g-1 custom-bg w-100">
        <Aside className="col-4" />
        <div className="col-8">
            {cartData.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    </div>
    </>
  );
}
