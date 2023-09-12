import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Progress (props){
    const {mealList} = props
    let protein = 0
    let carbs = 0
    // "Carbohydrate, by difference"
    let fat = 0
    // Total lipid (fat)
    let calories = 0
    // 'Energy'
    mealList.map((meal)=>{
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
    })
    return( <>  <h2>protein</h2>
                <ProgressBar striped variant={(protein/(68/0.8))>1?"success": "danger"} now={((protein/(68/0.8))*100)} label={protein?`${Math.floor((protein/(68/0.8))*100)}%`:null} />
                <h2>carbohydrates</h2>
                <ProgressBar striped variant={carbs > 300?"success":"danger"} now={(carbs/300)*100} label={`${Math.floor((carbs/300)*100)}%`} />
                <h2>fat</h2>
                <ProgressBar striped variant={(((fat*9)/(calories*0.25))*100) > 100?"danger":"info"} now={fat?((fat*9)/(calories*0.25))*100:null} label={`${Math.floor((fat*9)/(calories*0.25)*100)}%`} />
    
            </>
    )
        
}