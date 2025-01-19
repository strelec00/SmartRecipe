import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen lg:p-20 md:p-20 sm:p-[50px] xs:p-[40px] xs:py-[100px] py-[100px] px-[10px]">
      {/* First Div (Image Section) */}
      <div className="sm:w-full lg:w-2/5 w-[0px] hidden p-3 bg-[url('../src/assets/login.png')] bg-no-repeat bg-cover bg-center h-full sm:flex sm:flex-col sm:justify-center sm:items-center rounded-l-3xl"></div>

      {/* Second Div (Form Section) */}
      <div className="sm:w-full lg:w-1/3 w-full p-6 shadow-lg bg-[#FFDCD6] h-full flex flex-col justify-center sm:rounded-r-3xl sm:rounded rounded-3xl">
        <h2 className="text-[13px] text-gray-700 text-left mb-1 mt-6">
          LET'S GET YOU STARTED
        </h2>
        <h3 className="text-[23px] text-black text-left mb-5">
          Create an Account
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-[13px] text-gray-500 absolute left-2 bottom-[33px] bg-[#FFDCD6] px-[10px]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 p-2 border border-gray-500 bg-[#FFDCD6] rounded-lg focus:outline-1 focus:outline-black"
              required
            />
          </div>
          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-[13px] text-gray-500 absolute left-2 bottom-[33px] bg-[#FFDCD6] px-[10px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="w-full mt-1 p-2 border border-gray-500 bg-[#FFDCD6] rounded-lg focus:outline-1 focus:outline-black"
              required
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-[13px] text-gray-500 absolute left-2 bottom-[33px] bg-[#FFDCD6] px-[10px]"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full mt-1 p-2 border border-gray-500 bg-[#FFDCD6] rounded-lg focus:outline-1 focus:outline-black"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img
                  src="../src/assets/icons/open-eye.svg"
                  alt="Hide password"
                  className="w-5 h-5 mt-1"
                />
              ) : (
                <img
                  src="../src/assets/icons/closed-eye.svg"
                  alt="Show password"
                  className="w-5 h-5 mt-1"
                />
              )}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-black text-white text-[14px] rounded-lg hover:bg-gray-800 h-12"
          >
            CONTINUE
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-500" />
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-500" />
        </div>
        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Google Button */}
          <button className="w-full flex items-center relative py-2 px-4 bg-white text-gray-500 font-light rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-[13px]">
            <img
              src="../src/assets/icons/google.png"
              alt="Google"
              className="w-5 h-5 absolute left-4"
            />
            <span className="w-full text-center">Sign Up with Google</span>
          </button>

          {/* Facebook Button */}
          <button className="w-full flex items-center relative py-2 px-4 bg-white text-gray-500 font-light rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-[13px]">
            <img
              src="../src/assets/icons/facebook.png"
              alt="Facebook"
              className="w-5 h-5 absolute left-4"
            />
            <span className="w-full text-center">Sign Up with Facebook</span>
          </button>

          {/* Apple Button */}
          <button className="w-full flex items-center relative py-2 px-4 bg-white text-gray-500 font-light rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-[13px]">
            <img
              src="../src/assets/icons/apple.png"
              alt="Apple"
              className="absolute left-4 h-5"
            />
            <span className="w-full text-center">Sign Up with Apple</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            LOGIN HERE
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;