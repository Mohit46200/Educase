import {Link} from "react-router-dom"


const Header = () => {

    return (
    
            <header className="w-full bg-white shadow-sm border-b">
                    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                        
                        <h1 className="text-lg font-semibold text-purple-700">
                        PopX
                        </h1>

                        <nav className="flex items-center gap-6">
                        <Link
                            to="/"
                            className="text-gray-700 font-medium hover:text-purple-600 transition"
                        >
                            Home
                        </Link>
                        </nav>

                    </div>
            </header>
    

    ) 
    
}



export default Header