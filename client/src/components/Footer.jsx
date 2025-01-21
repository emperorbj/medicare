import { useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate()
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* ----left section---- */}
            <div>
                <img className="mb-5 w-40" src="/logo.svg" alt="" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum alias, quia earum perspiciatis tempore enim nostrum tenetur quibusdam incidunt ipsa laboriosam fuga fugiat reprehenderit voluptate ab asperiores? Iusto, sequi!</p>
            </div>

            {/* ----center section---- */}
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li className="cursor-pointer" onClick={()=>{navigate('/');scrollTo(0,0)}}>Home</li>
                    <li className="cursor-pointer" onClick={()=>{navigate('/contact');scrollTo(0,0)}}>Contact Us</li>
                    <li className="cursor-pointer" onClick={()=>{navigate('/about');scrollTo(0,0)}}>About Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* ----right section---- */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>(+234) 905 411 0776</li>
                    <li>cwaku96@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="text-sm text-center py-4">Copyright 2024@ Prescripto - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer