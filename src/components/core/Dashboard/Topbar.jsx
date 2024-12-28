
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../../services/operations/authAPI"
const Topbar = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Welcome, Admin</h2>
        <div
              onClick={() => {
                dispatch(logout(navigate))
                setOpen(false)
              }}
              className="font-bold cursor-pointer bg-red-600 px-4 py-2 rounded hover:bg-red-500"
            >
              {/* <VscSignOut className="text-lg" /> */}
              Logout
            </div>
        </div>
    );
  };
  
  export default Topbar;
  