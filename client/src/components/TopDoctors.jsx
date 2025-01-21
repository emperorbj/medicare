import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
// import { doctors } from "../assets/assets"

const TopDoctors = () => {

    const navigate = useNavigate()

    const {doctors} = useContext(AppContext)
  return (
    <div className="flex flex-col items-center gap-4 my-12 text-gray-900 md:mx-10">
        <h1 className="text-2xl font-medium">Top Doctors To Book</h1>
        <p className="text-center sm:w-1/3 text-sm">Simply browse through our extensive list of trusted Doctors</p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {doctors.slice(0,10).map((doc,index)=>(
                <div onClick={()=> {navigate(`/appointment/${doc._id}`);scrollTo(0,0)}} className="border border-indigo-700 overflow-hidden cursor-pointer rounded-lg hover:translate-y-[-10px] transition-all duration-500" key={index}>
                    <img className="bg-indigo-600" src={doc.image} alt="" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-400">
                            <p className="w-2 h-2 rounded-full bg-green-600"></p><p>Available</p>
                        </div>
                        <p className="text-lg font-medium text-gray-800">{doc.name}</p>
                        <p className="text-gray-700 text-sm">{doc.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="hover:scale-105 transition-all duration-200 cursor-pointer">
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className="hover:scale-105 transition-all duration-200 cursor-pointer bg-blue-200  text-gray-600 px-11 py-2 rounded-full mt-9">More</button>
        </div>
    </div>
  )
}

export default TopDoctors