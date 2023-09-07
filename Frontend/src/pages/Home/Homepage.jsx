import Nav from "../Nav/Nav";
import './homepageStyle.css'
import Features from "./features/Features";
import JoinNow from "./features/JoinNow";
import CalcPrev from "./CalcPrev";
// Frontend/src/pages/Home/homepageStyle.css
export const Homepage = () => {


    return (
        <div className="MainHome">
            <Nav />

            <div className="homePic">
                <div className="space"></div>
                <div className="homeText">
                    <h1>Shredder Fitness/Nutrition Planner</h1>
                    <p>
                       Welcome to Shredder, your ultimate fitness and nutrition companion! With user-friendly features, personalized nutrition guidance, and real-time tracking capabilities, Shredder is your partner in sculpting a stronger, healthier, and happier you. Say goodbye to guesswork and hello to success with Shredder, because your fitness journey begins here!
                    </p>

                </div>
            </div>


            <div className="featuresHeader">
                <div className="f1">Develop healthy habits</div>
                <div className="f2">Count your calories, ensure you're meeting nutrient targets, and see your progress over time.</div>
            </div>


            <div className="features">
                <Features
                    imageSRC='/features/icons8-gym-64.png'
                    title='Stuff 1'
                    description='Explanation of stuff.'
                />
                <Features
                    imageSRC='/features/icons9.png'
                    title='Stuff 2'
                    description='Explanation of stuff.'
                />
                <Features
                    imageSRC='/features/icons10.png'
                    title='Stuff 3'
                    description='Explanation of stuff.'
                />
                <Features
                    imageSRC='/features/icons11.png'
                    title='Stuff 4'
                    description='Explanation of stuff.'
                />
                <Features
                    imageSRC='/features/icons12.png'
                    title='Stuff 5'
                    description='Explanation of stuff.'
                />
                <Features
                    imageSRC='/features/icons13.png'
                    title='Stuff 6'
                    description='Explanation of stuff.'
                />
            </div>
            
            
            
            {/* <div className="Why">
                div.
                We understand that achieving your health and fitness goals can be a challenging journey, which is why we've created the Shredder workout tracker to simplify and supercharge your fitness routine. Whether you're looking to shed pounds, gain muscle, or simply lead a healthier lifestyle, Shredder is here to help you track your progress, stay motivated, and make every workout count.
                
            </div> */}

            <div className="Why">
            {/* <div className="space"></div> */}
            <div className="homeText">
                <h2>Why Join Shredder?</h2>
                <p>
                We understand that achieving your health and fitness goals can be a challenging journey, which is why we've created the Shredder workout tracker to simplify and supercharge your fitness routine. Whether you're looking to shed pounds, gain muscle, or simply lead a healthier lifestyle, Shredder is here to help you track your progress, stay motivated, and make every workout count.
                </p>

            </div>

            </div>


            <JoinNow 
                title='Like What You See?'
                text='Sign up today for free!'
            />

            <CalcPrev
                title='Take control of your diet with our Calculators.'
                text='BHSOHDOHkfkdsahoiahiowhxhlkhlhiohoaihskdfhalskh'
            />

        </div>
    )
}

export default Homepage;