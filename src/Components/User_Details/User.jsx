import { useContext } from "react"
import { Globalcontext } from "/home/mohit/Desktop/Coding/Educase/Globalcontext/globalcontext.jsx";

const User = () => {


  const { name, email } = useContext(Globalcontext)

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[350px] h-[600px] rounded-lg shadow-md overflow-hidden">
        
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Account Settings</h2>
        </div>

        <div className="px-6 py-5">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diams
          </p>

          <div className="border-t border-dashed"></div>

        </div>
      </div>
    </div>
  )
}

export default User