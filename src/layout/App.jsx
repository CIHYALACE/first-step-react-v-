import { useState } from "react";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import { SharedLayout } from "../sharedLayout/sharedLayout";
import { HomePage } from "../pages/homapage";
import { Products } from "../pages/products";
import { ProductDetails } from "../pages/productDetails";
import { AddNewProduct } from "../pages/addNewProduct";
import { Page404 } from "../pages/page404"
import { Account } from "../pages/account";
import { UserProducts } from "../pages/shop";
import { Profile } from "../pages/profile";
import { Cart } from "../pages/cartPage";


function App() {
  const [count, setCount] = useState(0);
  let role = sessionStorage.getItem("role")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path={role != "admin"? "/products" : undefined} index={role == "admin"} element={<HomePage />} />
          <Route path={role == "admin"? "/products" : undefined} index={role != "admin"} element={<Products />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/:id/edit" element={<AddNewProduct />} />
          <Route path="/products/:id/view" element={<ProductDetails />} />
          <Route path="/shop" element={<UserProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id/view" element={<ProductDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
