import {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import { Globalcontext } from "../../Globalcontext/globalcontext.jsx"
const Createaccount = () => {


    const [isAgency, setIsAgency] = useState(true)
    const navigate = useNavigate()
    const {setName,setEmail} = useContext(Globalcontext)
    

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                
                    
                    <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-semibold">
                        Create your <br /> PopX account
                    </h1>
                    
                    </div>

                
                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault()
                            navigate("/user")
                        }}
                    >
                    
                   <div>
                        <label className="text-sm text-purple-600 font-medium">
                            Full Name*
                        </label>
                        <input
                            type="text"
                            placeholder="Marry Doe"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    
                    <div>
                        <label className="text-sm text-purple-600 font-medium">
                        Phone number*
                        </label>
                        <input
                        type="text"
                        placeholder="Marry Doe"
                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    
                    <div>
                        <label className="text-sm text-purple-600 font-medium">
                        Email address*
                        </label>
                        <input
                        type="email"
                        
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Marry Doe"
                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                
                    <div>
                        <label className="text-sm text-purple-600 font-medium">
                        Password*
                        </label>
                        <input
                        type="password"
                        placeholder="Marry Doe"
                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    
                    <div>
                        <label className="text-sm text-purple-600 font-medium">
                        Company name
                        </label>
                        <input
                        type="text"
                        placeholder="Marry Doe"
                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    
                    <div>
                        <p className="text-sm font-medium mb-2">
                        Are you an Agency?*
                        </p>

                        <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2">
                            <input
                            type="radio"
                            checked={isAgency === true}
                            onChange={() => setIsAgency(true)}
                            className="accent-purple-600"
                            />
                            Yes
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                            type="radio"
                            checked={isAgency === false}
                            onChange={() => setIsAgency(false)}
                            className="accent-purple-600"
                            />
                            No
                        </label>
                        </div>
                    </div>

                
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-md font-semibold mt-4 hover:opacity-90 transition"
                    >
                        Create Account
                    </button>
                    </form>
                </div>
            </div>

        </>
  )
}

export default Createaccount