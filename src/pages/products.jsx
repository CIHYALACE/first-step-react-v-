import { Aside } from "../component/Aside";
import { AdminProductCard} from "../component/adminProductCard";

export function Products() {
  return (
    <>
    <div className="bg-image">
      <h1 className="text-center fs-1 fw-bold">Products List</h1>
      <div className="row container-fluid my-1 g-4">
        <Aside className="col-4" />
        <AdminProductCard className="col-8" />
      </div>
    </div>
    </>
  );
}
