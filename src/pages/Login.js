
import Template from "../components/core/Auth/Template"
import Navbar from "./Navbar"
function Login() {
  return (  
<>

<div className="bg-[#f2daed]">
<Navbar/>
      <Template
      formType="login"  
    />
</div>

</>
  )
}

export default Login
