import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"


function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.ADMIN)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }


  return (
    <div>

<form
  onSubmit={handleOnSubmit}
  className="flex w-full flex-col gap-y-3 border-2 border-[#E5E7EB] p-4 rounded-lg  sm:h-[600px] bg-[#F0F4F8]"
>
  <div className="flex flex-wrap gap-6">
    <label className="w-full sm:w-[48%]">
      <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
        First Name <sup className="text-[#F59E0B]">*</sup>
      </p>
      <input
        required
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleOnChange}
        placeholder="Enter first name"
        className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399]"
      />
    </label>
    <label className="w-full sm:w-[48%]">
      <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
        Last Name <sup className="text-[#F59E0B]">*</sup>
      </p>
      <input
        required
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleOnChange}
        placeholder="Enter last name"
        className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399]"
      />
    </label>
  </div>

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
      className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399]"
    />
  </label>

  <div className="flex flex-wrap gap-6">
    <label className="relative w-full sm:w-[48%]">
      <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
        Create Password <sup className="text-[#F59E0B]">*</sup>
      </p>
      <input
        required
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        onChange={handleOnChange}
        placeholder="Enter Password"
        className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399] !pr-12"
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
    </label>
    <label className="relative w-full sm:w-[48%]">
      <p className="mb-2 text-sm sm:text-base leading-5 sm:leading-6 text-[#2D3748]">
        Confirm Password <sup className="text-[#F59E0B]">*</sup>
      </p>
      <input
        required
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleOnChange}
        placeholder="Confirm Password"
        className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399] !pr-12"
      />
      <span
        onClick={() => setShowConfirmPassword((prev) => !prev)}
        className="absolute right-4 top-[38px] z-[10] cursor-pointer"
      >
        {showConfirmPassword ? (
          <AiOutlineEyeInvisible fontSize={24} fill="#000814" />
        ) : (
          <AiOutlineEye fontSize={24} fill="#000814" />
        )}
      </span>
    </label>
  </div>

  <button
    type="submit"
    className="mt-6 rounded-md bg-[#F59E0B] py-3 px-6 font-medium text-white hover:bg-[#D97706] focus:ring-2 focus:ring-[#34D399]"
  >
    Create Account
  </button>

  <div className="mt-2 text-center">
          <p className="text-gray-700">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </div>
</form>

    </div>
  )
}

export default SignupForm
