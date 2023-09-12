import "./NutritionStyle.css"
import NutritionEntry from "./NutritionEntry";
import Progress from "./ProgressBar";
import { useState,useEffect } from "react"
import axios from "axios";

export default function Nutrition(){
    const [mealList, setMealList] = useState([])
    const [meal,setMeal] = useState([])
    const [foodName,setFoodName] = useState("")
    const [foodData, setFoodData] = useState([])
    const [ingredient,setIngredient] = useState("")
    const [amount,setAmount] = useState(0)
    const [click,setclick]= useState(true)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios.defaults.headers.common["Authorization"] = `Token ${token}`
        axios.get("http://127.0.0.1:8000/api/v1/nutrition/").then((response)=>{
            setMealList(response.data)
            console.log(mealList)
        }).catch((error)=>{
            console.log(error)
        })
    },[click])
    useEffect(()=>{
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=4aoaIKsciqsf7EfdYfXZOl3XgW2n8179rwc9gZRW&query=${foodName}&dataType=Branded`).then((response)=>{
            const foodSearch = response.data.foods
            setFoodData(foodSearch)
        }).catch((error)=>{
            console.log(error)
        })
    },[foodName])

    const addFood = async()=>{
        try{
            const token = localStorage.getItem("token")
            axios.defaults.headers.common["Authorization"] = `Token ${token}`
            const response = await axios.post("http://127.0.0.1:8000/api/v1/nutrition/1/",{meal})
        }catch(error){
            console.log(error)
        }
        setclick(!click)
    }

    return <div className="nutrition-page">
                <div className="userInfo">
                    <h2>
                    USER Info
                    </h2>
                    <div className="img">   
                        img
                    </div>
                </div>
                <div className="results">
                    Results
                    <div className="resultsContainer">
                        <Progress mealList={mealList} />
                    </div>
                <h2>TODAY I ATE</h2>
                <div className="nutrition-entry">
                </div>
                    <div>
                        <select name="" id="" onChange={(e)=>{setMeal(e.target.value)
                        console.log(meal)}}>
                            <option value="">Pick A Meal</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Snack">Snack</option>
                        </select>
                        <button onClick={addFood}>Start a Meal</button>
                    </div>
            
                    <div className="mealList">
                            {mealList.map((mealItem)=>{
                                return <ul key={mealItem.id}>{mealItem.meal} <button onClick={async()=>{
                                    try{
                                        const token = localStorage.getItem("token")
                                        axios.defaults.headers.common["Authorization"] = `Token ${token}`
                                        const response =  await axios.delete(`http://127.0.0.1:8000/api/v1/nutrition/${mealItem.id}/`)
                                        console.log(response)
                                    }catch(error){
                                        console.log(error)
                                    }
                                    setclick(!click)
                                }}>delete meal</button>
                                <NutritionEntry key={mealItem.id} mealItem={mealItem} mealList={mealList} setMealList={setMealList} meal={meal} setMeal={setMeal} foodName={foodName} setFoodName={setFoodName} foodData={foodData} addFood={addFood} setIngredient={setIngredient} ingredient={ingredient} setclick={setclick} click={click}/>
                               {/* check this */}
                                {mealItem.ingredients.map((ingredient)=>{
                                    return(<li key={ingredient.id}>
                                    {ingredient.name}, {ingredient.amount_consumed} <input type="text" placeholder="enter amount" onChange={(event)=>{setAmount(event.target.value)}} /> <button onClick={(async()=>{
                                        try{
                                            const token = localStorage.getItem("token")
                                            axios.defaults.headers.common["Authorization"] = `Token ${token}`
                                            const response =  await axios.put(`http://127.0.0.1:8000/api/v1/nutrition/${mealItem.id}/ingredient/${ingredient.id}/`,{amount})
                                            console.log(response)
                                        }catch(error){
                                            console.log(error)
                                        }
                                        setclick(!click)
                                    })}>add amount</button>
                                     <button onClick={async()=>{
                                        try{
                                            const token = localStorage.getItem("token")
                                            axios.defaults.headers.common["Authorization"] = `Token ${token}`
                                            const response =  await axios.delete(`http://127.0.0.1:8000/api/v1/nutrition/${mealItem.id}/ingredient/${ingredient.id}/`)
                                            console.log(response)
                                        }catch(error){
                                            console.log(error)
                                        }
                                        setclick(!click)
                                    }}>delete</button>
                                    </li>)

                                })}
                            </ul>
                            })}
                    </div>

                </div>

        </div>
}