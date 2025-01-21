import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import { assets } from "../assets/assets"
import RelatedDoctors from "../components/RelatedDoctors"

const Appointment = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlot, setDocSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDoctorDetails = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);

  }


  const getAvailableSlots = async () => {
    setDocSlot([])
    // getting the current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // getting the date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the data with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        // increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlot(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    getAvailableSlots()
  }, [])

  useEffect(() => {
    console.log(docSlot);

  }, [docSlot])

  useEffect(() => {
    fetchDoctorDetails()
  }, [docId, doctors])
  return docInfo && (
    <>
      {/* ------doctor details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-indigo-400 w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="" />
        </div>
        {/* Doctors profile  */}
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center text-gray-800 text-2xl gap-2">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.specialty}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
          </div>

          {/* doctor about */}
          <div>
            <p className="flex items-center text-sm font-medium text-gray-900 gap-1 mt-3">About
              <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-500">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      {/* ------appointment schedule */}
      <div className="sm:ml-72 text-gray-700 font-medium mt-4 sm:pl-4">
        <p>Booking Slots</p>
        <div className="mt-4 flex items-center gap-4 overflow-x-scroll w-full">
          {docSlot.length && docSlot.map((slot, index) => (
            <div
              onClick={() => setSlotIndex(index)}
              key={index}
              className={`${slotIndex === index ? 'bg-indigo-400 text-white' : 'border border-gray-200'} min-w-16 px-3 text-center p-2.5 cursor-pointer rounded-full`}>
              <p>{slot[0] && daysOfWeek[slot[0].dateTime.getDay()]}</p>
              <p>{slot[0] && slot[0].dateTime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 w-full overflow-x-scroll mt-4">
          {docSlot.length && docSlot[slotIndex].map((slot, index)=> (
            <p
            onClick={()=>setSlotTime(slot.time)} 
            key={index} 
            className={`${slot.time === slotTime ? 'bg-indigo-500 text-white' : 'border border-gray-200'} text-sm font-light border border-gray-200 rounded-full cursor-pointer flex-shrink-0 px-4 py-2 `}>
              {slot.time.toLowerCase()}
            </p>
          ))
          }
        </div>
        <button className="mt-10 bg-indigo-500 flex items-center px-4 py-2 text-white rounded-full shadow-sm">Book Appointment</button>
      </div>
      {/* related doctors */}
      <RelatedDoctors docId={docId} specialty={docInfo.speciality}/>
    </>
  )
}

export default Appointment