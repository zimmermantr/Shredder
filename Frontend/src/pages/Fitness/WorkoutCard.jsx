import { useContext } from "react";
import { userContext } from "../../App";
import ExerciseCard from "./ExerciseCard";

export default function WorkoutCard({workout}) {
    const { workouts, deleteWorkout, user } = useContext(userContext);

    return(
        <div>
            <div key={workout.id} className="bg-slate-300 border-2 p-5 m-5 max-w-1000">
                <p className="text-3xl font-bold">{workout.workout_name}</p>
                <div>
                    {workout.exercises.map((exercise) => (
                        <div key={exercise.id} >
                            <ExerciseCard
                                key={exercise.id}
                                workouts={exercise.workouts}
                                exercise_id={exercise.id}
                                exercise_name={exercise.exercise_name}
                                primary_muscle={exercise.primary_muscle}
                                secondary_muscle={exercise.secondary_muscle}
                                equipment={exercise.equipment}
                                difficulty={exercise.difficulty}
                                instructions={exercise.instructions}
                                created_by={exercise.created_by}
                            />
                        </div>
                    ))}
                </div>
                {workout.created_by !== 1 && workout.created_by === user.id &&(
                <button className="ml-auto bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded " onClick={() => deleteWorkout(workout.id)}>Delete</button>
                )}
            </div>
        </div>
    )
}