// import Carousel from 'react-bootstrap/Carousel';
// import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useState, useContext, useEffect } from 'react';
// // import styled from 'styled-components'
import { api } from '../../Api';
// // import { userContext } from '../../App';
import { useParams } from "react-router-dom";

export default function FullWorkoutProgram () {

const { id } = useParams()
const [programData, setProgramData] = useState({})

useEffect(() => {
    async function getWorkoutPrograms() {
        try {
            const token = localStorage.getItem("token");
            if(token) {
                const headers = { Authorization: `Token ${token}`};
                const response = await api.get(`programs/${id}`, { headers });
                setProgramData(response.data)
                console.log(response.data)
            } else {
                console.log("No auth token found in local storage.");
                
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }
    getWorkoutPrograms()
}, [id]);

console.log("Program data: ", programData)

return (
    <div > 
      <h1>Workout Program Details</h1>
      <h2>{programData.program_name}</h2>
      <p>Program Details: {programData.program_details}</p>
      <p>Difficulty: {programData.program_difficulty}</p>
      <p>Duration: {programData.program_duration}</p>
      <p>Frequency: {programData.frequency_per_week} days per week</p>

      <h2>Workouts:</h2>
      <ul>
        {programData.workouts && programData.workouts.map((workout, index) => (
          <li key={index}>
            <h3>{workout.workout_name}</h3>
            <p>Workout Details: {workout.workout_details}</p>
            <ul>
              {workout.exercises.map((exercise, exerciseIndex) => (
                <li key={exerciseIndex}>
                  <p>{`${exercise.exercise_name} | ${exercise.sets} sets of ${exercise.reps} reps`}</p>
                  <p>{`Equipment: ${exercise.equipment}`}</p>
                  <p>{`Primary Muscles : ${exercise.primary_muscle}`}</p>
                  <p>{`Secondary Muscles : ${exercise.secondary_muscle}`}</p>
                  <p>{`Instructions: ${exercise.instructions}`}</p>
                  {/* Add more exercise details as needed */}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}












