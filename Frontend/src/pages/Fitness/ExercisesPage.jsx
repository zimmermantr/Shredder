import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import './fitnessStyle.css'
import Nav from "../Nav/Nav";

export const ExercisesPage = () => {

    const [exerciseList, setExerciseList] = useState([])
    const { apiKey, setAddedToWorkout, workouts, rapidAPIKey } = useContext(userContext);
    const { searchParameters = "" } = useParams(null);
    const navigate = useNavigate();
    const [offset, setOffset] = useState(0);
    const [error, setError] = useState();
    const [ searchInput, setSearchInput ] = useState("");
    const [bodyParts, setBodyParts] = useState([])

    // useEffect(() => {
    //     setOffset(0);
    //     axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${searchParameters}`, {
    //         headers: {
    //             'X-Api-Key': apiKey
    //         }
    //     })
    //     .then((response) =>{
    //         if (response.data.length === 0) {
    //             navigate("/exercises/:searchParameters")
    //         }else{
    //         setExerciseList(response.data)
    //         // searchParameters = ""
    //         }
    //     })
    //     .catch((error) => {
    //         setError(error);
    //     });
    // }, [searchParameters]);

    // const loadMoreExercises = () => {
    //     const newOffset = offset + 10;
    //     setOffset(newOffset);

    //     axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${searchParameters}&offset=${newOffset}`, {
    //         headers: {
    //             'X-Api-Key': apiKey
    //         }
    //     })
    //     .then((response) => {
    //         setExerciseList(prevExercises => [...prevExercises, ...response.data]);
    //     })
    //     .catch((error) => {
    //         setError(error);
    //     });
    // };

    const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': rapidAPIKey ,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    const fetchData = async (url, options) => {
        const res = await fetch(url, options);
        const data = await res.json();
    
        return data;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchInput) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions
            );
            
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(searchInput)
                || item.target.toLowerCase().includes(searchInput)
                || item.equipment.toLowerCase().includes(searchInput)
                || item.bodyPart.toLowerCase().includes(searchInput)
            );
            setSearchInput('');
            setExerciseList(searchedExercises);
            setAddedToWorkout(false);
            
        }
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            exerciseOptions);
            
            setBodyParts(['all', ...bodyPartsData])
            
        }
        fetchExercisesData();
    }, [])
    

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     setSearchInput("");
    //     navigate(`/exercises/${searchInput}`);
    //     setAddedToWorkout(false);
    // };

    const onChangeHandler = (event) => {
        setSearchInput(event.target.value.toLowerCase());
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
        <div className="h-screen  w-full bg-[#000000]" style={{
            backgroundImage: `url('/shreddersGymB&P.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
            }}>
            <Nav />
            {/* <div className=" relative p-5 w-[100%]" >
                <p className="text-white">{bodyParts.map((bp, index) => (
                    <li key={index}>{bp}</li>
                ))}</p>
            </div> */}
            
            <div  className="h-auto w-full bg-[#000000]" style={{
            backgroundImage: `url('/shreddersGymB&P.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
            }}>
            <div className="flex-grow mt-2">
                <form onSubmit={handleSearch} className="flex justify-left items-center mx-3">
                    <input type="text" placeholder="search" onChange={onChangeHandler} value={searchInput} list="muscle_groups" className="border rounded"/>
                    <datalist id="muscle_groups">
                        {availableMuscleGroups.map((muscleGroup) => (
                        <option key={muscleGroup} value={muscleGroup} />
                        ))}
                    </datalist>
                    <button type="submit" className="bg-purple-600 hover:bg-purple-700  text-white py-1 px-4 rounded" >Search</button>
                </form>
                
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {exerciseList.map((lift,index) => (
                        <ExerciseCard
                            key={index}
                            exercise_name={lift.name}
                            primary_muscle={lift.target}
                            equipment={lift.equipment}
                            // difficulty={lift.difficulty}
                            // instructions={lift.instructions}
                            gif_img = {lift.gifUrl}
                            availableWorkouts={workouts}
                            
                        />
                    ))}
                </ol>
            {exerciseList.length !== 0 && (
                <div className="flex justify-center pb-3">
            {/* <button onClick={loadMoreExercises} className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-4 rounded w-64">Load More</button> */}
                </div>)
            }
            </div>
            </div>
        </div>
    )
}
