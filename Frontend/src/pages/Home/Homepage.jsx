import Nav from "../Nav/Nav";
import './homepageStyle.css'
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



                    {/* refactor with react */}

            <div className="features">
                <div className="cont">
                    <img src="/features/icons8-gym-64.png" alt="" />
                    <div className="fT">Stuff 1</div>
                    <div className="fP">Explanation of stuff.</div>
                </div>
                <div className="cont">
                    <img src="/features/icons9.png" alt="" />
                    <div className="fT">Stuff 2</div>
                    <div className="fP">Explanation of stuff.</div>
                </div>
                <div className="cont">
                    <img src="/features/icons10.png" alt="" />
                    <div className="fT">Stuff 3</div>
                    <div className="fP">Explanation of stuff.</div>
                </div>
                <div className="cont">
                    <img src="/features/icons11.png" alt="" />
                    <div className="fT">Stuff 4</div>
                    <div className="fP">Explanation of stuff.</div>
                </div>
                <div className="cont">
                    <img src="/features/icons12.png" alt="" />
                    <div className="fT">Stuff 5</div>
                    <div className="fP">Explanation of stuff.</div>
                </div>
                <div className="cont">
                    <img src="/features/icons13.png" alt="" />
                    <div className="fT">Stuff 6</div>
                    <div className="fP">Explanation of stuff.</div>
                </div>

            </div>
            
            
            
            
            <div className="Why">We understand that achieving your health and fitness goals can be a challenging journey, which is why we've created the Shredder workout tracker to simplify and supercharge your fitness routine. Whether you're looking to shed pounds, gain muscle, or simply lead a healthier lifestyle, Shredder is here to help you track your progress, stay motivated, and make every workout count.</div>

        </div>
    )
}

export default Homepage;