import { Outlet } from "react-router";
import { AdminHeader } from "../component/adminHeader";
import { CustomerHeader } from "../component/customerHeader";
export function SharedLayout() {
  const role = sessionStorage.getItem("role");

  return (
    <>
      {role == "admin" ? <AdminHeader /> : <CustomerHeader />}
      <Outlet />
    </>
  );
}
