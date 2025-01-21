
import { NavLink,useNavigate } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {

    const [menuOpen, setmenuOpen] = useState(false);
    const [token, setToken] = useState(true);
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-4 bg-white shadow-md">    
        <img onClick={()=> navigate('/')} className="w-44 cursor-pointer" src="/logo.svg" alt="" />
        <ul className="hidden md:flex items-center justify-center space-x-8 font-medium ">
            <NavLink to="/">
                <li className="py-1">Home</li>
                <hr className="hidden border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto"/>
            </NavLink>
            <NavLink to="/contact">
                <li className="py-1">Contact</li>
                <hr className="hidden border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto"/>
            </NavLink>
            <NavLink to="/about">
                <li className="py-1">About</li>
                <hr className="hidden border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto"/>
            </NavLink>
            <NavLink to="/doctors">
                <li className="py-1">All Doctors</li>
                <hr className="hidden border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto"/>
            </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {
                token ?
                <div className="flex items-center gap-3 cursor-pointer group relative">
                    <img className="w-8 rounded-full" src="/profile_pic.png" alt="profile" />
                    <img className="w-2.5" src="/dropdown_icon.svg" alt="drop-down" />
                    <div className="absolute top-0 right-0 pt-14 text-base font-normal text-slate-800 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 rounded-md flex flex-col gap-4 p-4">
                            <p onClick={()=> navigate('/my-profile')} className="hover:bg-indigo-300 hover:text-white items-center justify-start flex px-3 py-[2px] rounded-full">My profile</p>
                            <p onClick={()=> navigate('/my-appointment')} className="hover:bg-indigo-300 hover:text-white items-center justify-start flex px-3 py-[2px] rounded-full">My Appointments</p>
                            <p onClick={()=> setToken(false)} className="hover:bg-indigo-300 hover:text-white items-center justify-start flex px-3 py-[2px] rounded-full">Logout</p>
                        </div>
                    </div>
                </div>
                :
                <button onClick={()=> navigate('/login')} className="bg-purple-400 text-white px-6 py-1 rounded-md font-light hidden md:block">
                    create account
                </button>
            }
            
        </div>
    </div>
  )
}

export default Navbar