
import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className=" min-h-[calc(100vh)]  ">
      {loading ? (
        <div className="spinner">
        </div>
      ) : (
        <div className="mx-auto h-[100vh] flex w-11/12 max-w-maxContent flex-col-reverse justify-center gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
           
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
         
        </div>
      )}
    </div>
  )
}

export default Template
