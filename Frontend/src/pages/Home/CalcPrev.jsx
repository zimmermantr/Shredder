import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { InchToCm, KcalPerKg, LbsToKg, ProteinReq, BMI } from '../Calculators';


const CalcHp = styled.div`
margin: 4rem 2rem;
padding-bottom: 4rem;
display: flex;
flex-direction: row;
justify-content: space-evenly;


@media screen and (max-width:  1025px){
    flex-direction: column;
    justify-content: center;
    align-items:center;

}

`
const CalcHpLeft = styled.div`
background: #100e0eb2;
border-radius: 2rem;
padding: 3rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

color: whitesmoke;

`

const CalcHpRPhone = styled.div`
background-image: url('/phone2.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center;

padding:3rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width:  1025px){
    margin: 2rem;
}


`;

const PhoneDisplay = styled.div`
// background: yellow;
border-radius: 2rem;
color: white;
height: 26rem;
width: 13.5rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const InnerPhoneH2 = styled.h5`
margin-top: 1rem;
color: whitesmoke;
text-align: center;
text-wrap: balance;
`
const CalcP = styled.h6`
padding:1rem;

`
const CalcInput = styled.input`
    color: purple;
`

const CalcPrev = ({title, text,    }) => {
    const [dropBtnTitle, setDropBtnTitle] = useState('Calculations');
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [calc, setCalc] = useState(0);


    useEffect(()=> {
        console.log(height)
    }, [dropBtnTitle])

    const proteinEquation = () => {
        setCalc(1)
        setDropBtnTitle('Protein Requirements')
    }
    const bmiEquation = () => {
        setCalc(2)
        setDropBtnTitle('Body Mass Index')
    }
    const calorieEquation = () => {
        setCalc(3)
        setDropBtnTitle('Daily Calorie Recommendation')
    }

    return (
        <>
            <CalcHp>

                <CalcHpLeft>
                    <h2>{title}</h2>
                    <CalcP>{text}</CalcP>




                    <h3>What would you like to calculate?</h3>

                    <DropdownButton id="dropdown-basic-button" title={dropBtnTitle}>
                        <Dropdown.Item onClick={() => proteinEquation()}>Protein Requirements</Dropdown.Item>
                        <Dropdown.Item onClick={() => bmiEquation()}>Body Mass Index</Dropdown.Item>
                        <Dropdown.Item onClick={() => calorieEquation()}>Daily Calories</Dropdown.Item>
                    </DropdownButton>

                    {calc === 2 ?
                    <CalcInput type="text" placeholder='height in inches' 
                    onChange={(e)=> setHeight(e.target.value)}/>
                    : ''}

                    {calc > 0 ?
                    <CalcInput type="text" placeholder='weight in pounds' 
                    onChange={(e)=> setWeight(e.target.value)} />
                    : ''}

                </CalcHpLeft>

                <CalcHpRPhone>
                    <PhoneDisplay>
                        <InnerPhoneH2>
                            {dropBtnTitle}
                        </InnerPhoneH2>
                        <InnerPhoneH2>
                            {calc === 1 ? (weight && `${Math.floor(ProteinReq(0.8,LbsToKg(weight)))}g of protein`)
                            : calc === 2 ? (height && weight && `${(BMI(InchToCm(height),LbsToKg(weight)).toFixed(2))} BMI`)
                            : calc === 3 ? (weight && `${Math.floor(KcalPerKg(25,LbsToKg(weight)))} calories/day`)
                            : ''}
                        </InnerPhoneH2>
            


                    </PhoneDisplay>
                </CalcHpRPhone>

            </CalcHp>
        </>
    )
};

export default CalcPrev;