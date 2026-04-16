import {useNavigate} from "react-router-dom"


const Home = () => {

    const navigate = useNavigate()


    return (
        <>
           
  
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
            
            <div className="relative bg-white w-[350px] h-[600px] rounded-lg shadow-md overflow-hidden p-6 flex flex-col justify-end">
                
            
                <div className="z-10">
                <h1 className="text-2xl font-bold mb-2">
                    Welcome to PopX
                </h1>

                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit,
                </p>

                
                <button 
                className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-700 mb-3 hover:opacity-90 transition"
                onClick={() => navigate("/createaccount")}
                >
                    Create Account
                </button>

                <button 
                className="w-full py-3 rounded-md font-medium bg-purple-200 text-gray-800 hover:bg-purple-300 transition"
                onClick={() => navigate("/alreadyregistered")}
                >
                    Already Registered? Login
                </button>
                </div>
            </div>
            </div>
  

        
        </>
    )
}

export default Home