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
        margin: "16px",
        paddingLeft: "18px"
      }}> 
      <h1 className="text-4xl pb-8 pt-4">{programData.program_name}</h1>
      <div className="text-xl space-y-2 pb-2">
        <p>Program Details: {programData.program_details}</p>
        <p>Difficulty: {programData.program_difficulty}</p>
        <p>Duration: {programData.program_duration}</p>
        <p>Frequency: {programData.frequency_per_week} days per week</p>
      </div>
      <div style={{
        border: "2px solid black",
        padding: "10px",
        margin: "16px"
      }}>
      
      <ul>
        {programData.workouts && programData.workouts.map((workout, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold">{workout.workout_name}</h3>
            {workout.workout_details && (
                  <p className="text-lg pt-4 pb-4">
                    Details: {workout.workout_details}
                  </p>
                )}
            <div >
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} style={{
                    border: "2px solid black",
                    padding: "10px",
                    margin: "16px"
                  }}>
                  <p className="text-lg underline font-semibold">{exercise.exercise_name}</p> 
                  <p className="font-semibold pb-4">{`${exercise.sets} sets of ${exercise.reps} reps`}</p>
                  <p>{`Equipment: ${exercise.equipment}`}</p>
                  <p>{`Primary Muscles : ${exercise.primary_muscle}`}</p>
                  <p>{`Secondary Muscles : ${exercise.secondary_muscle}`}</p>
                  <p className="pt-4 font-semibold">Instructions: </p>
                  <p>{`${exercise.instructions}`}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
      </div>
    </div>
    </div>
  );
}












