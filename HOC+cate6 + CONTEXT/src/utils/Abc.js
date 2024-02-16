import { createContext } from "react";

// create Context is used for creating the store or global state

const Abc = createContext({
    loggedInUser : "phani",
    user:"frontend"
})

export default Abc