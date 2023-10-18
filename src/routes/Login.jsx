import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.noroff.dev/api/v1/social/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
        if (response.status === 401) {
          const data = await response.json();
          setError(data.errors[0]);
          return;
        }
      const data = await response.json();
      sessionStorage.setItem("data", JSON.stringify(data));
       navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-[#0F0E13] w-8/12 text-white font-Ibm sm:w-full min-h-screen h-full lg:flex-row flex flex-col-reverse pt-10 lg:pt-0 justify-center items-center">
      <div className="left-container w-full lg:w-1/2 h-full flex flex-col py-10 justify-center items-center">
        <h1 className="font-Ibm text-2xl lg:text-5xl font-semibold mb-5 lg:mb-20">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="w-10/12 lg:w-auto">
          <div className="flex flex-col ">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full lg:w-96 h-14 rounded-xl pl-5 mb-4 mt-1 text-black"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full lg:w-96 h-14 rounded-xl pl-5 mb-4 mt-1 text-black"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#7660FF] w-full lg:w-96 h-12 rounded-2xl mt-10 font-semibold text-2xl"
          >
            Login
          </button>
        </form>
        {error.message && <p className="text-red-600">{error.message}</p>}

        <p className="mt-16 font-semibold text-sm md:text-xl ">
          {" "}
          Not Registered already?
        </p>
        <button
          onClick={() => navigate("/register")}
          type="button"
          className="w-11/12 lg:w-[417px] h-12 rounded-2xl mt-5 font-semibold text-2xl border-2 border-[#282634] text-[#7660FF] "
        >
          Register here
        </button>
      </div>
      <div className="right-container w-full lg:w-1/2 flex justify-center items-center ">
        <img
          src="/assets/big-logo.png"
          alt=""
          className="w-11/12 max-w-[450px] lg:max-w-[796px] "
        />
      </div>
    </div>
  );
}

export default Login;
