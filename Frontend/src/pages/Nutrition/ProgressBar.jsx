import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Progress (props){
    const {mealList,weight,height,age,gender,activity_level,dietary_restrictions} = props
    let protein = 0
    let carbs = 0
    // "Carbohydrate, by difference"
    let fat = 0
    // Total lipid (fat)
    let calories = 0
    // 'Energy'
    mealList.map((meal)=>{
        const today = new Date()
        const todayDateString = today.toISOString().split('T')[0]
        const itemDate = new Date(meal.created_at)
        const itemDateString = itemDate.toISOString().split('T')[0]
        if (itemDateString === todayDateString){
            meal.ingredients.map((ingredient)=>{
                ingredient.nutrients_id.map((nutrient)=>{
                    if (nutrient['name'] == 'Protein'){
                        protein += (nutrient['measurement_id']['amount']* ingredient['amount_consumed'])
    
                    }
                    else if (nutrient['name'] == 'Carbohydrate, by difference'){
                        carbs += (nutrient['measurement_id']['amount']* ingredient['amount_consumed'])
                    }
                    else if (nutrient['name'] == 'Total lipid (fat)'){
                        fat += (nutrient['measurement_id']['amount']* ingredient['amount_consumed'])
                    }
                    else if (nutrient['name'] == 'Energy'){
                        calories += (nutrient['measurement_id']['amount']* ingredient['amount_consumed'])
                    }
                })
            })
            // fat conversion to calories then compare to 25% of fat
            fat = (((fat*9)/(calories*0.25))*100)
        }
        console.log(weight)
        console.log(protein)
        console.log(activity_level)
        // add activity level
        if(gender ==="Male"){
            // RMR FORMULA
                calories/=((10*weight) + (6.25*height)- (5*age) + 5)}
        else{
            calories/=((10*weight) + (6.25*height) - (5*age) - 161)
        }
    })
    return( <>  
               Calories
                <ProgressBar striped variant={(calories*100) > 100?"danger":"info"} now={calories?(calories*100):null} label={`${Math.floor(calories*100)}%`} />
               Protein
                                                {/* PROTEIN FORMULA */}
                <ProgressBar striped variant={(protein/(weight*activity_level))>1?"success": "danger"} now={((protein/(weight*activity_level))*100)} label={protein?`${Math.floor((protein/(weight*activity_level))*100)}%`:null} />
               Carbohydrates
                <ProgressBar striped variant={carbs > 300?"success":"danger"} now={(carbs/300)*100} label={`${Math.floor((carbs/300)*100)}%`} />
               Fat
                <ProgressBar striped variant={fat > 100?"danger":"info"} now={fat?fat:null} label={`${Math.floor(fat)}%`} />
    
            </>
    )
        
}
// Females: (10*weight) + (6.25*height) – (5*age) – 161
// Males: (10*weight) + (6.25*height) – (5*age) + 5