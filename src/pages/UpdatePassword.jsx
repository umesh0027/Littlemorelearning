

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";

function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);

 
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

 
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

 
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <div className="grid min-h-screen place-items-center bg-[#f2daed] px-4">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-full max-w-[500px] rounded-lg bg-white p-6 sm:p-8 shadow-lg">
     
          <h1 className="text-2xl font-semibold text-[#2D3748]">
            Choose New Password
          </h1>
          <p className="text-sm text-[#4A5568] my-4">
            Almost done! Enter your new password to reset it.
          </p>

         
          <form onSubmit={handleOnSubmit}>
            
            <label className="relative block">
              <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
                New Password <sup className="text-[#F59E0B]">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter your new password"
                className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399] !pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-[38px] z-[10] cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#000814" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#000814" />
                )}
              </button>
            </label>

          
            <label className="relative block mt-6">
              <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
                Confirm New Password <sup className="text-[#F59E0B]">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm your new password"
                className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399] !pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-[38px] z-[10] cursor-pointer"
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#000814" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#000814" />
                )}
              </button>
            </label>

          
            <button
              type="submit"
              className="w-full bg-[#F59E0B] py-3 rounded-md mt-6 font-medium text-white hover:bg-[#D97706] focus:ring-2 focus:ring-[#34D399]"
            >
              Reset Password
            </button>
          </form>

        
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#2D3748] hover:underline"
            >
              <BiArrowBack />
              Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatePassword;
