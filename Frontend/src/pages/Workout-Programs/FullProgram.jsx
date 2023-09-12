import axios from "axios"
import { useState, useContext, useEffect } from 'react';
import { api } from '../../Api';
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";

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
  <div>
    < Nav/>
    <div  style={{
        border: "2px solid black",
        padding: "10px",
        margin: "16px"
      }}> 
      <h1>{programData.program_name}</h1>
      <p>Program Details: {programData.program_details}</p>
      <p>Difficulty: {programData.program_difficulty}</p>
      <p>Duration: {programData.program_duration}</p>
      <p>Frequency: {programData.frequency_per_week} days per week</p>

      <h2 style={{
        border: "2px solid black",
        padding: "10px",
        margin: "16px"
      }}>Workouts:</h2>
      <ul style={{
        border: "2px solid black",
        padding: "10px",
        margin: "16px"
      }}>
        {programData.workouts && programData.workouts.map((workout, index) => (
          <div key={index} >
            <h3 style={{
        border: "2px solid black",
        padding: "10px",
        margin: "16px"
        }}>{workout.workout_name}</h3>
            <p>Workout Details: {workout.workout_details}</p>
            <div >
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} style={{
                    border: "2px solid black",
                    padding: "10px",
                    margin: "16px"
                  }}>
                  <p className="underline;">{`${exercise.exercise_name} | ${exercise.sets} sets of ${exercise.reps} reps`}</p>
                  <p>{`Equipment: ${exercise.equipment}`}</p>
                  <p>{`Primary Muscles : ${exercise.primary_muscle}`}</p>
                  <p>{`Secondary Muscles : ${exercise.secondary_muscle}`}</p>
                  <p>{`Instructions: ${exercise.instructions}`}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
}












