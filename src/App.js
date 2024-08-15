import './App.css';
import Program from './routes/Program/program.component';
import Navbar from './components/navbar/navbar.compnent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Home from "./routes/home/home.component";
import Contact from "./routes/contact/contact.component";
import Partnership from "./routes/partnership/partnership.component";
import AboutUs from "./routes/aboutus/aboutUs.component";
import Blog from "./routes/blog/blog.component";
import Login from "./routes/login/login.component";
import LoadingPage from "./components/loadingPage/loadingPage.component";

const router = createBrowserRouter([{
    path: '/',
    element: <Navbar/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/Program',
            element: <Program />
        },
        {
            path: '/Contact',
            element: <Contact/>
        },
        {
            path: '/Partnership',
            element: <Partnership/>
        },
        {
            path: '/Aboutus',
            element: <AboutUs/>
        },
        {
            path: '/Blog',
            element: <Blog/>
        },
        {
            path: '/Login',
            element: <Login/>
        }
    ]
}]);
function App() {
    
    const [isloaded, setIsLoaded] = React.useState(false);
  return (
      <div className="App">
          {
              true?
                <RouterProvider router={router}/>  
               : <LoadingPage onloadDone={()=>{setIsLoaded(true)}}/>   
          }
      </div>
  )
}

export default App;
