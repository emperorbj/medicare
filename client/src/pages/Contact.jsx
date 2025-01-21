import { assets } from "../assets/assets"

const Contact = () => {
  return (
       <div>
          <div className="text-center text-2xl pt-10 text-gray-500">
            
            <p>CONTACT <span className="text-gray-900 font-medium">US</span></p>
          </div>
    
          <div className="my-10 flex justify-center items-center flex-col md:flex-row gap-12">
            <img className="w-full max-w-[360px]" src={assets.contact_image} alt="" />
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
              <b className="text-gray-800">OUR OFFICE</b>
              <p>54709 Willms Station </p>
              <p>Suite 350, Washington, USA</p>
              <p>Tel: (415) 555‑0132</p>
              <p>Email: greatstackdev@gmail.com</p>
              <b className="text-gray-800">CAREERS AT PRESCRIPTO</b>
              <p>Learn more about our teams and job openings.</p>
              <button className="flex items-start border border-gray-500 px-4 py-2 w-36 hover:bg-indigo-500 hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
                Explore Careers
              </button>
            </div>
          </div>
          </div>
  )
}

export default Contact