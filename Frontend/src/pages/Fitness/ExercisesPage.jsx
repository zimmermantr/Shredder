import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
// import './fitnessStyle.css'
import Nav from "../Nav/Nav";

export const ExercisesPage = () => {

    const [muscleList, setMuscleList] = useState([])
    const { apiKey, setAddedToWorkout, workouts } = useContext(userContext);
    const { searchParameters = "" } = useParams(null);
    const navigate = useNavigate();
    const [offset, setOffset] = useState(0);
    const [error, setError] = useState();
    const [ searchInput, setSearchInput ] = useState("");

    useEffect(() => {
        setOffset(0);
        axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${searchParameters}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        })
        .then((response) =>{
            if (response.data.length === 0) {
                navigate("/exercises/:searchParameters")
            }else{
            setMuscleList(response.data)
            // searchParameters = ""
            }
        })
        .catch((error) => {
            setError(error);
        });
    }, [searchParameters]);

    const loadMoreExercises = () => {
        const newOffset = offset + 10;
        setOffset(newOffset);

        axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${searchParameters}&offset=${newOffset}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        })
        .then((response) => {
            setMuscleList(prevExercises => [...prevExercises, ...response.data]);
        })
        .catch((error) => {
            setError(error);
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSearchInput("");
        navigate(`/exercises/${searchInput}`);
        setAddedToWorkout(false);
    };

    const onChangeHandler =(event) => {
        setSearchInput(event.target.value);
    };

    const availableMuscleGroups = [
        "abdominals",
        "abductors",
        "adductors",
        "biceps",
        "calves",
        "chest",
        "forearms",
        "glutes",
        "hamstrings",
        "lats",
        "lower_back",
        "middle_back",
        "neck",
        "quadriceps",
        "traps",
        "triceps",
    ];

    return(
        <div className="h-screen bg-[#1B1919] w-full ">
            <Nav />
            <div className="h-auto bg-[#1B1919] w-full ">
            <div className="flex-grow mt-2">
                    <form onSubmit={onSubmitHandler} className="flex justify-left items-center mx-3">
                        <input type="text" placeholder="search" onChange={onChangeHandler} value={searchInput} list="muscle_groups" className="border rounded"/>
                        <datalist id="muscle_groups">
                            {availableMuscleGroups.map((muscleGroup) => (
                            <option key={muscleGroup} value={muscleGroup} />
                            ))}
                        </datalist>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">Search</button>
                    </form>
                </div>
            <ol>
                {muscleList.map((lift,index) => (
                    
                    <ExerciseCard
                        key={index}
                        exercise_name={lift.name}
                        primary_muscle={lift.muscle}
                        equipment={lift.equipment}
                        difficulty={lift.difficulty}
                        instructions={lift.instructions}
                        availableWorkouts={workouts}
                    />
                ))}
            
            </ol>

            {muscleList.length !== 0 && (
                <div className="flex justify-center pb-3">
            <button onClick={loadMoreExercises} className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-4 rounded w-64">Load More</button>
            </div>)
            }
        </div>
        </div>
    )
}