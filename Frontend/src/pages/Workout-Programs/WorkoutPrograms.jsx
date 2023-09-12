import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useState, useContext, useEffect } from 'react';
// import styled from 'styled-components'
import { api } from '../../Api';
// import { userContext } from '../../App';

export default function WorkoutPrograms() {

const [workoutProgramData, setWorkoutProgramData] = useState([])
const navigate = useNavigate()


useEffect(() => {
    async function getWorkoutPrograms() {
        try {
            const token = localStorage.getItem("token");
            if(token) {
                const headers = { Authorization: `Token ${token}`};
                const response = await api.get(`programs/`, { headers });
                setWorkoutProgramData(response.data)
            } else {
                console.log("No auth token found in local storage.");
                
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }
    getWorkoutPrograms()
}, []);

const fullProgramButton = (id) => {
    navigate(`/programs/${id}/`)
}

return (
    <div className="flex flex-col items-center border-2 border-solid w-50">
      {workoutProgramData.map((program) => (
        <div key={program.id} className="text-center" style={{
            border: "2px solid black",
            padding: "10px",
          }}>
          <h3>{program.program_name}</h3>
          <div>
            Details: {program.program_details}
          </div>
          <div>
            Difficulty: {program.program_difficulty}
          </div>
          <div>
            Duration: {program.program_duration}
          </div>
          <div>
            Frequency: {program.frequency_per_week} days per week
          </div>
          <button onClick={() => fullProgramButton(program.id)}>Full Program</button>
        </div>
      ))}
    </div>
  );
  

}