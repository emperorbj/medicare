import { useNavigate } from "react-router-dom"


const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-indigo-600 rounded-lg px-6 md:px-10 lg:px-20">
    {/* left---side */}
    <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-2xl md:text-4xl text-white lg:text-4xl font-semibold 
        md:leading-tight lg:leading-tight">Book Appointments<br/>with 100+ skilled Doctors</p>
        <a
        onClick={()=>{navigate('/login');scrollTo(0,0)}} 
        className="flex cursor-pointer items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
            create Account
            <img className="w-3" src="/arrow_icon.svg" alt="" />
        </a>
    </div>
    {/* right---side */}
    <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src="/appointment_img.png" alt="" />
    </div>
</div>
  )
}

export default Banner