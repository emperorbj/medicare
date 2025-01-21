

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-indigo-600 rounded-lg px-6 md:px-10 lg:px-20">
            {/* left---side */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                <p className="text-2xl md:text-4xl text-white lg:text-4xl font-semibold md:leading-tight lg:leading-tight">We make Appointments with<br/> Doctors easy</p>

                <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
                    <img className="w-28" src="/group_profiles.png" alt="" />
                    <p>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                <a 
                className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href="#specialty">
                    Book Appointment
                    <img className="w-3" src="/arrow_icon.svg" alt="" />
                </a>
            </div>
            {/* right---side */}
            <div className="md:w-1/2 relative">
                <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src="/header_img.png" alt="" />
            </div>
        </div>
    )
}

export default Header