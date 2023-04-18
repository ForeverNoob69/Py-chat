import React from 'react'

import './App.css';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';
import Login from './login/Login';
import { AuthProvider } from './context/Context';

import PrivateRoute from './privateRout/PrivateRoute';


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Signup from './login/Signup';
import Home from './Home';
import LoginNew from './login/LoginNew';
import Homepage from './home/Homepage';


function App() {

  const router = createBrowserRouter([{
    path:'/',
    element:<Homepage/>
  },{
    path:'/login',
    element:<AuthProvider><Login/></AuthProvider>
  },{
    path:'/account',
    element:<AuthProvider><LoginNew/></AuthProvider>
  },{
    path:'/',
    element:<AuthProvider><Home/></AuthProvider>,
  },{
    path:'/signup',
    element:<AuthProvider><Signup/></AuthProvider>
  },{
    path: '/',
    element: (
      <AuthProvider>
        <PrivateRoute>
          <div className="App">
            <div className="app__body">
              <Sidebar />
              <Outlet />
            </div>
          </div>
        </PrivateRoute>
      </AuthProvider>
    ),
    children: [
      {
        path: 'chat',
        element: <>  <div className="App">
        <div className="app__body"><Sidebar/><Chat /></div>
          </div></>
      },
      {
        path: 'chat/rooms/:roomID',
        element: <><div className="App">
        <div className="app__body"><Sidebar/><Chat /></div>
        </div></>
      }
    ]
  }
]);
  return (
    // <div className="App">
    // [
    //   {
    //     path: 'chat',
    //     element: <AuthProvider>
    //     <PrivateRoute>
    //       <div className="App">
    //         <div className="app__body"><Sidebar/><Chat /></div></div></PrivateRoute></AuthProvider>
    //   },
    //   {
    //     path: 'chat/rooms/:roomID',
    //     element: <AuthProvider>
    //     <PrivateRoute>
    //       <div className="App">
    //         <div className="app__body"><Sidebar/><Chat /></div></div></PrivateRoute></AuthProvider>
    //   }
    // ]
    //   <header className="App-header">
    //     <div className="app__body">
          
          <RouterProvider router={router}/>
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
