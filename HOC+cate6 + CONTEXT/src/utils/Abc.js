import { createContext } from "react";

// create Context is used for creating the store or global state

const Abc = createContext({
    loggedInUser : "Default User"
})

export default Abc