import React, { useState } from "react";
import { signup } from "../services/index";

const Signup = ({ ctp }) => {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userdata);
  };

  return (
    <div>
      <div className="flex flex-row ml-40 justify-between w-1/2 ">
        <h1 className="text-center pt-5 text-2xl">Sign Up</h1>
        {/* sends state back to the parent div */}
        <button className="text-gray-500" onClick={() => ctp(false)}>
          Cancel
        </button>
      </div>
      <div className="font-bold text-3xl text-[#0FE2D5] text-center mt-4">
        MerchantNeighbor
      </div>
      <form
        className="flex flex-col w-2/3 mx-auto mt-6"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          className="bg-white border-2 rounded-lg"
          type="text"
          id="email"
          name="email"
          value={userdata.email}
          onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
        />
        <label htmlFor="email">Password</label>
        <input
          className="bg-white border-2 rounded-lg"
          type="password"
          id="password"
          name="password"
          value={userdata.password}
          onChange={(e) =>
            setUserdata({ ...userdata, password: e.target.value })
          }
        />
        <label htmlFor="email">Confirm Password</label>
        <input
          className="bg-white border-2 rounded-lg"
          type="cpassword"
          id="cpassword"
          name="cpassword"
        />
        <input
          className="bg-[#0FE2D5] rounded-xl mt-5"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

const Login = ({ ctp }) => {
  return (
    <div>
      <div className="flex flex-row ml-40 justify-between w-1/2 ">
        <h1 className="text-center pt-5 text-2xl">Login In</h1>
        {/* sends state back to the parent div */}
        <button className="text-gray-500" onClick={() => ctp(false)}>
          Cancel
        </button>
      </div>
      <div className="font-bold text-3xl text-[#0FE2D5] text-center mt-4">
        MerchantNeighbor
      </div>
      <form className="flex flex-col w-2/3 mx-auto mt-6">
        <label htmlFor="email">Email</label>
        <input
          className="bg-white border-2 rounded-lg"
          type="text"
          id="email"
          name="email"
        />
        <label htmlFor="email">Password</label>
        <input
          className="bg-white border-2 rounded-lg"
          type="password"
          id="password"
          name="password"
        />
        <input
          className="bg-[#0FE2D5] rounded-xl mt-5"
          type="submit"
          value="Log In"
        />
      </form>
    </div>
  );
};

const Popup = ({ ctp }) => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="absolute w-screen h-screen top-0 bg-[#00000066] -translate-x-[40%] pt-28">
      <div className="bg-white z-100 rounded-lg w-1/3 h-3/5 mx-auto mt-22 max-w-md">
        {isRegistered ? <Login ctp={ctp} /> : <Signup ctp={ctp} />}
        <button
          onClick={() => setIsRegistered(!isRegistered)}
          className="text-gray-500 font-sans w-full text-sm mt-3"
        >
          {isRegistered ? (
            <div>Don't Have an Account? Create One here</div>
          ) : (
            <div>Already have an account? Login In</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Popup;
