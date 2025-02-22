import { Aside } from "../component/Aside";
import { CartProductCard } from "../component/cartProductCard";

export function Cart() {
  let role  = sessionStorage.getItem("role")
  return (
    <>
    <div className="bg-image">
      <h1 className="text-center fs-1 fw-bold text-light custom-bg">Your Cart</h1>
      <div className="row my-1 g-1 custom-bg w-100">
        <Aside className="col-4" />
        <CartProductCard className="col-8" />
      </div>
    </div>
    </>
  );
}
