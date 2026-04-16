import { createContext, useState} from "react"

export const Globalcontext = createContext()

const Globalprovider = ({ children }) => {

    const [name,setName] = useState("Educase")
    const [email,setEmail] = useState("Educase67567@gmail.com")

  return (
    <Globalcontext.Provider value={{name,setName,email,setEmail }}>
      {children}
    </Globalcontext.Provider>
  )
}

export default Globalprovider