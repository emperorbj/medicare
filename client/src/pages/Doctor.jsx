import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { doctors } from "../assets/assets"

const Doctor = () => {

  const {specialty} = useParams()
  
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const applyFilter = () => {
    if(specialty) {
      setFilterDoc(doctors.filter((doc)=> doc.speciality === specialty))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=> {
    applyFilter()
  },[doctors,specialty])
  
  return (
    <div>
      <p  className="text-gray-600">Check for your Specialist</p >
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">

        <button className="py-1 hover:bg-indigo-500 hover:text-white transition-all duration-500 px-4 rounded-full shadow-sm text-sm border border-gray-300 " onClick={()=>{prev => !prev}}>Filter</button>

        <div className="flex flex-col text-sm gap-4 text-gray-600">
          <p onClick={()=> specialty === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] shadow-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === 'General physician' ? 'bg-indigo-500 text-white font-semibold' : ''}`}>General physician</p >
          <p onClick={()=> specialty === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] shadow-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === 'Gynecologist' ? 'bg-indigo-500 text-white font-semibold' : ''}`}>Gynecologist</p >
          <p onClick={()=> specialty === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] shadow-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === 'Dermatologist' ? 'bg-indigo-500 text-white font-semibold' : ''}`}>Dermatologist</p >
          <p onClick={()=> specialty === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] shadow-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === 'Pediatricians' ? 'bg-indigo-500 text-white font-semibold' : ''}`}>Pediatrician</p >
          <p onClick={()=> specialty === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] shadow-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === 'Neurologist' ? 'bg-indigo-500 text-white font-semibold' : ''}`}>Neurologist</p >
          <p onClick={()=> specialty === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] shadow-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === 'Gastroenterologist' ? 'bg-indigo-500 text-white font-semibold' : ''}`}>Gastroenterologist</p >
        </div>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6">
          {filterDoc.map((doc,index)=>(
                <div onClick={()=> navigate(`/appointment/${doc._id}`)} className="border border-indigo-700 overflow-hidden cursor-pointer rounded-lg hover:translate-y-[-10px] transition-all duration-500" key={index}>
                    <img className="bg-indigo-600" src={doc.image} alt="" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-400">
                            <p  className="w-2 h-2 rounded-full bg-green-600"></p ><p >Available</p >
                        </div>
                        <p  className="text-lg font-medium text-gray-800">{doc.name}</p >
                        <p  className="text-gray-700 text-sm">{doc.speciality}</p >
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor