import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"


function LoginForm() {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }



  return (
   <>
  
<form
  onSubmit={handleOnSubmit}
  className="mt-6 flex w-full flex-col gap-y-6 bg-[#F7FAFC] p-6 rounded-lg"
>
  <label className="w-full">
    <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
      Email Address <sup className="text-[#F59E0B]">*</sup>
    </p>
    <input
      required
      type="email"
      name="email"
      value={email}
      onChange={handleOnChange}
      placeholder="Enter email address"
      className="w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#38B2AC]"
    />
  </label>

  <label className="relative w-full">
    <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
      Password <sup className="text-[#F59E0B]">*</sup>
    </p>
    <input
      required
      type={showPassword ? "text" : "password"}
      name="password"
      value={password}
      onChange={handleOnChange}
      placeholder="Enter Password"
      className="w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#38B2AC] !pr-12"
    />
    <span
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute right-4 top-[38px] z-[10] cursor-pointer"
    >
      {showPassword ? (
        <AiOutlineEyeInvisible fontSize={24} fill="#000814" />
      ) : (
        <AiOutlineEye fontSize={24} fill="#000814" />
      )}
    </span>
    <Link to="/forgot-password">
      <p className="mt-2 text-sm text-[#3182CE] hover:underline text-right">
        Forgot Password
      </p>
    </Link>
  </label>

  <button
    type="submit"
    className="mt-6 rounded-md bg-[#F59E0B] py-3 px-6 font-medium text-white hover:bg-[#D97706] focus:ring-2 focus:ring-[#34D399]"
  >
    Sign In
  </button>

  <div className="mt-4 text-center">
    <p className="text-sm text-[#2D3748]">
      Don't have an account?{" "}
      <Link to="/signup" className="text-[#3182CE] hover:underline">
        Signup
      </Link>
    </p>
  </div>
</form>

   
   </>
  )
}

export default LoginForm
