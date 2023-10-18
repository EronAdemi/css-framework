import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    banner: "",
  });

  const [errors, setErrors] = useState({});
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
    // Form validation
    const validationErrors = {};
    if (!formData.name.match(/^[a-zA-Z_]+$/)) {
      validationErrors.name =
        "Name must not contain symbols and must not have spaces, only underscores allowed";
    }
    if (!formData.email.match(/^[a-zA-Z0-9._-]+@(stud.noroff.no|noroff.no)$/)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
      if (formData.password.length < 8) {
        validationErrors.password = "Password must be at least 8 characters";
      }
    }
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (formData.banner && !urlPattern.test(formData.banner)) {
      validationErrors.banner = "Invalid URL for Banner";
    }
    if (formData.avatar && !urlPattern.test(formData.avatar)) {
      validationErrors.avatar = "Invalid URL for Avatar";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Perform POST request
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/social/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (response.status === 400) {
          const data = await response.json();
          setErrors(data.errors[0]);
          return;
        }
        await response.json();
        navigate("/login");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="bg-[#0F0E13] text-white font-Ibm w-8/12 md:w-full h-full  lg:flex-row flex flex-col-reverse pt-10 lg:pt-0 justify-center items-center">
      <div className="left-container w-full lg:w-1/2 h-full flex flex-col py-10 justify-center items-center">
        <h1 className="font-Ibm text-2xl lg:text-5xl font-semibold">
          Register Today
        </h1>
        <form onSubmit={handleSubmit} className="w-11/12 sm:w-8/12 lg:w-auto ">
          <div className="flex flex-col mt-5 text">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Username"
              className=" lg:w-96 h-14 rounded-xl pl-5 mb-4 mt-1 text-black"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="flex flex-col">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              className=" lg:w-96 h-14 rounded-xl pl-5 mb-4 mt-1 text-black"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className=" lg:w-96 h-14 rounded-xl pl-5 mb-4 mt-1 text-black"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="flex flex-col">
            <label>Avatar:</label>
            <input
              type="text"
              placeholder="Avatar URL"
              className=" lg:w-96 h-14 rounded-xl pl-5 mb-4 mt-1 text-black"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Banner:</label>
            <input
              type="url"
              placeholder="Banner Url"
              className=" lg:w-96 h-14 rounded-xl pl-5 text-black"
              name="banner"
              value={formData.banner}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-[#7660FF] w-full lg:w-96 h-12 rounded-2xl mt-10 font-semibold text-2xl"
          >
            Register
          </button>
        </form>
        {errors.message && <p className="text-red-600">{errors.message}</p>}
        <p className="mt-16 font-semibold text-xl ">
          {" "}
          Already have an account?
        </p>
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="w-8/12 lg:w-[417px] h-12 rounded-2xl mt-5 font-semibold text-2xl border-2 border-[#282634] text-[#7660FF] "
        >
          Log in
        </button>
      </div>
      <div className="right-container w-full lg:w-1/2 flex justify-center items-center ">
        <img
          src="/assets/big-logo.png"
          alt=""
          className="w-full max-w-[450px] lg:max-w-[796px] "
        />
      </div>
    </div>
  );
}

export default Register;
