import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react';
import { api } from './Api';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const userContext = createContext();

function App() {
  const apiKey = import.meta.env.VITE_NINJA_API_KEY;
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [addedToWorkout, setAddedToWorkout] = useState(false);

  const validUser = async() => {
    let token = localStorage.getItem('token');
    if (token){
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      let response = await api.get('users/');
      setUser(response.data);
      setUserID(response.data.id)
    }
  }

  const addExercise = async (exerciseData, workoutId) => {
    try{
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.post(`workouts/${workoutId}/exercises/`, exerciseData);
        
        fetchWorkouts();
        
      }
    }catch (error) {
      console.error("Error adding exercise to workout:", error)
    }
  }
  const deleteExercise = async (workoutId, exerciseId) => {
    try{
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.delete(`workouts/${workoutId}/exercises/${exerciseId}`);
        fetchWorkouts();
      }
    }catch (error) {
      console.error("Error deleting exercise:", error)
    }
  }
  const fetchWorkouts = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            api.defaults.headers.common["Authorization"] = `Token ${token}`;
            let response = await api.get("workouts/");
            console.log(response.data)
            setWorkouts(response.data)
        }
    } catch (error) {
        console.error("Error fetching workouts:", error);
    }
  };
  const deleteWorkout = async (workoutId) => {
    try{
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.delete(`workouts/${workoutId}/`);
        fetchWorkouts();
      }
    }catch (error) {
      console.error("Error deleting workout:", error)
    }
  }

  useEffect(()=> {
    validUser()
    setWorkouts([])
    fetchWorkouts()
  }, []);


  return (
    <userContext.Provider value={{user, setUser, workouts, workout, addExercise, deleteExercise, setAddedToWorkout, apiKey, fetchWorkouts, deleteWorkout }}>
      <Outlet />
    </userContext.Provider>
  )
}

export default App
