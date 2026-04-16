import { useState } from "react";
import {useNavigate} from "react-router-dom"


const Alreadyregistered = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()  



    return (
        <>
                   
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-[350px] h-[600px] rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-2">
                Signin to your <br /> PopX account
                </h1>

                <p className="text-gray-500 text-sm mb-6">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit,
                </p>

                <div className="mb-4">
                <label className="text-sm text-purple-600 font-medium">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                </div>

                <div className="mb-6">
                <label className="text-sm text-purple-600 font-medium">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                </div>

                <button
                onClick={() => navigate("/user")}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-md font-semibold mt-4 hover:opacity-90 transition"

                >
                Login
                </button>
            </div>
            </div>

        
        </>
    )
}

export default Alreadyregistered