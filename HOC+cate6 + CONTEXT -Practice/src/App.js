import React,{lazy, Suspense, useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Menu from './Components/Menu';
//import About from './Components/About';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import '../index.css'
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import RestaurentCard from './Components/RestaurantCard';
import UserContext from './utils/UserContext.js';
//import Grocery from './Components/Grocery'


//chuncking 
//code splitting
// dynamic loading 
// 
// // 
const Grocery=lazy(()=> import("./Components/Grocery.js"));

const About=lazy(()=> import("./Components/About.js"));

const App= ()=>{
  
    const [userInfo,setUserInfo]= useState()

    useEffect(()=>{
        const data={
            name:"Hello world"
        }

        setUserInfo(data.name)

    })

    return (
        <UserContext.Provider value={{loggedInUser:userInfo}}>
        <div className="app">
          <UserContext.Provider value={{loggedInUser:"welcome to Phani"}}>   
        <Header />
      
      </UserContext.Provider>   
      
   
        <Outlet />
        </div>
        </UserContext.Provider>
        
    )
}
 const appRouter= createBrowserRouter([
   {
        path:'/',
        element : <App />,
        children:[
            {
                path:'/',
                element : <Body/>
            },
            {
                path:'/about',
                //element : <About/>
                element:<Suspense fallback={<h1>Loading...hi .</h1>}><About/></Suspense>
            },
            {
                path:'/contact',
                element : <Contact/>
            },
            {
                path:"/grocery",
                //element:<Grocery/>,
                 element:<Suspense fallback={<h1>Loading..hi..</h1>}><Grocery/></Suspense> 
            },
            {
                path:"/restaurants/:resId",
                element :<RestaurantMenu/>
            }
        ],
        errorElement : <Error />
    },
   


])
 export default App


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

