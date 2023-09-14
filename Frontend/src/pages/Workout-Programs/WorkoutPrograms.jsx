import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useState, useContext, useEffect } from 'react';
import { api } from '../../Api';
import Nav from "../Nav/Nav";
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
<div>
  <Nav />
  <div className='bg-cover bg-fixed bg-[url("https://images.pexels.com/photos/949128/pexels-photo-949128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
    <section className="text-gray-600 body-font text-xl">
      <div className="container px-5 py-24">
        <div className="flex flex-col justify-center items-center mx-auto">
          {workoutProgramData.map((program) => (
            <div key={program.id} className="p-4 md:w-2/3 text-center">
              <div className="h-full bg bg-purple-200 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-150">
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="" alt="Placeholder Image" /> */}
                <div className="p-6">
                  <h1 className="title-font text-4xl font-medium text-gray-900 mb-3">{program.program_name}</h1>
                  <p className="leading-relaxed mb-3">Details: {program.program_details}</p>
                  <p className="leading-relaxed mb-3">Difficulty: {program.program_difficulty}</p>
                  <p className="leading-relaxed mb-3">Duration: {program.program_duration}</p>
                  <p className="leading-relaxed mb-3">Frequency: {program.frequency_per_week} days per week</p>
                  <div className="flex items-center flex-wrap justify-center">
                    <a className="text-indigo-500 inline-flex items-center">
                      <button onClick={() => fullProgramButton(program.id)}>Full Program</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</div>

// https://images.pexels.com/photos/6389886/pexels-photo-6389886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

 
    // <div className="flex flex-col items-center border-2 border-solid">
    //     <Nav />
    //   {workoutProgramData.map((program) => (
    //     <div key={program.id} className="text-center " style={{
    //         border: "2px solid black",
    //         padding: "40px",
    //       }}>
    //       <h3>{program.program_name}</h3>
    //       <div>
    //         Details: {program.program_details}
    //       </div>
    //       <div>
    //         Difficulty: {program.program_difficulty}
    //       </div>
    //       <div>
    //         Duration: {program.program_duration}
    //       </div>
    //       <div>
    //         Frequency: {program.frequency_per_week} days per week
    //       </div>
    //       <button onClick={() => fullProgramButton(program.id)}>Full Program</button>
    //     </div>
    //   ))}
    // </div>
  );
  

}