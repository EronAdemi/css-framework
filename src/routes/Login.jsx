
const Login = () => {
  return (
    <div className="bg-[#0F0E13] text-white font-Ibm lg:w-full h-screen lg:flex-row flex flex-col-reverse pt-10 lg:pt-0 justify-center items-center">
      <div className="left-container w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
        <h1 className="font-Ibm text-2xl lg:text-5xl font-semibold">
          Register Today
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-11/12 lg:w-96 h-14 rounded-xl pl-5 mt-7 "
        />
        <input
          type="email"
          placeholder="Email"
          className="w-11/12 lg:w-96 h-14 rounded-xl pl-5 mt-5 "
        />
        <button
          type="submit"
          className="bg-[#7660FF] w-11/12 lg:w-[417px] h-12 rounded-2xl mt-5 font-semibold text-2xl"
        >
          Register
        </button>
        <p className="mt-16 font-semibold text-xl ">
          {" "}
          Already have an account?
        </p>
        <button
          type="button"
          className="w-11/12 lg:w-[417px] h-12 rounded-2xl mt-5 font-semibold text-2xl border-2 border-[#282634] text-[#7660FF] "
        >
          Log in
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

export default Login