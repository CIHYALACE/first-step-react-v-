import { Aside } from "../component/Aside";
import { AdminProductCard} from "../component/adminProductCard";
import { CustomerProductCard } from "../component/customerProductCard";
import { Slider } from "../component/slider";

export function Products() {
  let role  = sessionStorage.getItem("role")
  return (
    <>
    <div className="bg-image">
      {role != "admin" && <Slider />}
      <h1 className="text-center fs-1 fw-bold text-light custom-bg">Products List</h1>
      <div className="row my-1 g-1 custom-bg w-100">
        <Aside className="col-4" />
        {role == "admin" ? <AdminProductCard className="col-8" /> :<CustomerProductCard className="col-8" />}
      </div>
    </div>
    </>
  );
}
