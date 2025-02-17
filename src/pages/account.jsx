import { useState } from "react";
import { LoginForm } from "../component/loginForm";
import { RegisterForm } from "../component/registerForm";

export function Account() {
  const [shiftImage, setShiftImage] = useState(false);

  return (
    <>
      <div className="custom-height border border-dark bg-image">
        <main className="position-relative rounded bg-dark bg-opacity-75 w-50 h-75 border border-dark mx-auto my-5 d-flex justify-content-center align-items-center">
          <div className="w-50 h-100 position-absolute start-0 overflow-hidden rounded"
               style={{
                transform: shiftImage ? "translateX(100%)" : "translateX(0%)",
                transition: "transform 0.5s ease-in-out"
            }}>
            <img src="../../public/cardImage.jpg" className="img-fluid" />
          </div>
          <RegisterForm shiftImage={() => setShiftImage(false)}/>
          <LoginForm shiftImage={() => setShiftImage(true)}/>
        </main>
      </div>
    </>
  );
}
