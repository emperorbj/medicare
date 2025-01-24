
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)
  console.log(doctors);
  

  return (
    <div>
        <p className="mt-12 pb-3 font-medium text-zinc-700 border-b">My Appointments</p>

        <div>
            {
              doctors.slice(0,4).map((doc,index)=>(
                <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                  <div>
                    <img className="w-32 bg-indigo-400 rounded" src={doc.image} alt="" />
                  </div>

                  <div className="flex-1 text-sm text-zinc-600">
                    <p className="text-neutral-800 font-medium">{doc.name}</p>
                    <p>{doc.speciality}</p>
                    <p className="text-zinc-700 font-medium mt-1">Address:</p>
                    <p>{doc.address.line1}</p>
                    <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date and Time:</span>25, July, 2024 |  8:30 PM</p>
                  </div>
                  <div></div>

                  <div className="flex flex-col gap-2 justify-end">
                    <button className="shadow-sm hover:bg-sky-200 transition-all duration-300 bg-sky-400 text-sm text-white text-center sm:min-w-48 py-2 border rounded">Pay Now</button>
                    <button className="shadow-sm hover:bg-red-400 hover:text-white transition-all duration-300 text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded">Cancel Payment</button>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default MyAppointments