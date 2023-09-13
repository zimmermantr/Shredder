import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react';
import { api } from './Api';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);


  useEffect(()=> {

    const validUser = async() => {
      let token = localStorage.getItem('token');
      if (token){
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.get('users/');
        setUser(response.data);
      }
    };
    validUser();
  }, []);

  useEffect(()=> {
    console.log({user})
  }, [user]);

  

  return (
    <userContext.Provider value={{user, setUser }}>
      <Outlet />
    </userContext.Provider>
  )
}

export default App
