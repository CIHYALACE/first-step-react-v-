import { useDispatch, useSelector } from "react-redux";
import { Aside } from "../component/Aside";
import { CartProductCard } from "../component/cartProductCard";
import { use, useEffect, useState } from "react";
import { getUserDataAction } from "../redux/usersSlice";
export function Cart() {

  const { cartData , error } = useSelector((store) => store.usersSlice);
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("id");

   useEffect(() => {
    if (userId) {
      dispatch(getUserDataAction(userId));
    }
  }, [dispatch, userId]);
  
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total += cartData[i].quantity * Number(cartData[i].price);
    }
    setTotalAmount(total);
  }, [cartData]);

  return (
    <>
    <div className="bg-image min-vh-100">
      <h1 className="text-center fs-1 fw-bold text-light custom-bg">Your Cart</h1>
      <div className="row my-1 g-1 custom-bg w-100 min-h-75">
        <Aside className="col-4" />
        <div className="col-8">
            {cartData.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-end px-5 py-3 text-light custom-bg fw-bold fs-4 mt-3 me-3">Total Amount: ${totalAmount}</div>
        </div>
    </div>
    </>
  );
}
