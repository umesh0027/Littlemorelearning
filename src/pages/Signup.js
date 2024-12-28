
import Template from "../components/core/Auth/Template"
import Navbar from "./Navbar"

function Signup() {
  return (
   <>
   <div className="bg-[#f2daed] ">
   <Navbar/>
     <Template
     
      formType="signup"
    />
   </div>
   
   </>
  )
}

export default Signup
