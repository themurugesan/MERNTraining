import { createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Body } from './Components/Body/Body';
import { Header, Navbar } from './Components/Header/Header';
import { Errorpage } from './Components/Errorpage/Errorpage';
import { Contact } from './Components/Contact/Contact';
import { About } from './Components/About/About';
import { Params } from './Components/Params/Params';

function App() {

  const router = createBrowserRouter([
    {
      path:"*",
      element : <Errorpage/>
    },
    {
      path : "/header",
      element : <Header/>,
      children:[{
        path : "contact",
        element : <Contact/>
      },{
        path : "about",
        element:<About/>
      }]
    },
    {
      path : "/body",
      element : <Body/>
    },
    {
      path : "/params",
      element : <Params/>
    }
  ])
   


  return (
    // <Routes>
    //   <Route path='/header' element=<Header/>>
    //     <Route path='contact' element=<Contact/>/>
    //     <Route path='about' element=<About/> />
    //   </Route>
    //   <Route path='/body' element=<Body/> />
    //   <Route path='/params/:id/:item' element=<Params/> />
    //   <Route path='*' element=<Errorpage/> />
    // </Routes> 
    <RouterProvider router={router}>
    
   
    </RouterProvider>
  );
}

export default App;
