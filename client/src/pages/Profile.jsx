import { assets } from "../assets/assets"
import { useState } from "react"


const Profile = () => {

  const [userData, setUserData] = useState({
    name: 'Opatola Bolaji',
    image:assets.profile_pic,
    phone: '(+234) 1234567890',
    address: {
      line1: 'No 1, Bolaji street, Lagos'
    },
    gender:'Male',
  })

  const [isEditing, setIsEditing] = useState(true)
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {
        isEditing ?
          <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4" 
          type="text" value={userData.name} 
          onChange={ e => setUserData(prev => ({...prev,name:e.target.value}))}/>
          : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
      <hr className="h-[1px] bg-zinc-400 border-none" />
      <div>
        <p className="text-neutral-500 mt-3 underline">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {
        isEditing ?
          <input className="max-w-52 bg-gray-100" type="text" value={userData.phone} onChange={ e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
          : <p className="text-blue-400">{userData.phone}</p>
          }
          <p className="font-medium">Address:</p>
          {
            isEditing ? 
            <p>
              <input className="bg-gray-50" value={userData.address.line1} onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address,line1:e.target.value}}))} type="text" />
            </p>
            :
            <p className="text-gray-500">
              {userData.address.line1}
            </p>
          }
        </div>
      </div>
      <div>
        <p className="text-neutral-500 mt-3 underline">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-mono">Gender:</p>
          {
        isEditing ?
          <select className="max-w-20 bg-gray-100" value={userData.gender} onChange={(e)=> setUserData(prev =>({...prev,gender:e.target.value}))}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          : <p className="text-gray-400">{userData.gender}</p>
          }
        </div>
        <div className="mt-10">
          {
            isEditing
            ? <button onClick={()=> setIsEditing(false)} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 py-2 px-8 rounded">Save</button>
            : <button onClick={()=> setIsEditing(true)} className="border border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white transition-all duration-300 py-2 px-8 rounded">Edit</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile