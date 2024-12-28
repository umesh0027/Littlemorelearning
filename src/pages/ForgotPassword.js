import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPasswordResetToken } from "../services/operations/authAPI"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
   <div className="bg-[#f2daed]">
    <div className="flex justify-center items-center min-h-screen bg-[#f2daed]">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex flex-col gap-y-6 border-2 border-[#E5E7EB] p-6 rounded-lg w-full sm:w-[400px] bg-white">
          <h1 className="text-2xl font-semibold text-[#2D3748] text-center">
            {!emailSent ? "Reset your password" : "Check your email"}
          </h1>
          <p className="text-sm text-[#2D3748] text-center mb-4">
            {!emailSent
              ? `"Forgot your password? No problem! Enter your email address, and we'll send you a link to reset your password and regain access to your account."`
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label className="w-full">
                <p className="mb-2 text-sm sm:text-base text-[#2D3748]">
                  Email Address <sup className="text-[#F59E0B]">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="form-input w-full p-3 rounded-md border border-[#D1D5DB] focus:ring-2 focus:ring-[#34D399]"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-4 w-full bg-[#F59E0B] py-3 rounded-md text-white font-medium hover:bg-[#D97706] focus:ring-2 focus:ring-[#34D399]"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login">
              <p className="text-[#2D3748] text-sm hover:underline">
                <BiArrowBack className="inline mr-1" /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
   
   </div>
  )
}

export default ForgotPassword
