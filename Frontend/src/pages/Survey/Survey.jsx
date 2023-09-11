import styled from 'styled-components'
import { useState } from 'react'
import Button from '../Nav/Button';

const Sbackground = styled.div`
background: grey;
height: 100vh;

display: flex;
justify-content: space-between;

`;

const Ssideborder = styled.div`
background: red;
height: 100vh;
width: 15%;

display: flex;
align-items: center;
justify-content: center;

writing-mode: vertical-rl;
text-orientation: mixed;

font-size: 5rem;
color: grey;
text-shadow: #000 1px 20px 15px;
`;

const Smid = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`;

const Sh1 = styled.h1`
font-size: 5rem;
color:white;
`;

const Sp = styled.p`
width:80%;
text-align: center;
font-size: 1.5rem;
text-indent: 2rem;

color: white;
`;

const Squestions = styled.div`
background: #0003;
width: 90%;

display: flex;
flex-direction: column;
// align-items: center;
`;

const SQ = styled.div`
width:30%;
background: black;
border-radius: 2rem;

padding: 4rem 2rem;

display: flex;
flex-direction: column;
align-items: center;
margin: 2rem 0;
`

const SQ1_3 = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`;

const Sh6 = styled.h6`
color: white;

`;

const Sinput = styled.input`
text-align: center;
`;


export default function Survey() {

    return (
        <>
            <Sbackground>
                
                <Ssideborder>
                    Shred The Competiton
                </Ssideborder>
                
                <Smid>

                <Sh1>Please Fill Out The Form Below</Sh1>
                
                <Sp>Your nutrition and fitness goals are our top priority! Your answers will provide us with essential insights into your current fitness level, dietary preferences, and goals, allowing us to design a program that's perfectly suited to you. Our mission is to help you achieve the results you desire, and your input is the first step toward that success. Fill out the questionnaire now, and let Shredder transform your fitness journey into an efficient and personalized experience.</Sp>

                <Squestions>
                   
                    <SQ1_3>
                        <SQ>
                            <Sh6>What's your height in inches?</Sh6>
                            <Sinput type='text' placeholder="5'0 = 60 / 6'0 = 72" />
                        </SQ>

                        <SQ>
                            <Sh6>What's your weight in pounds?</Sh6>
                            <Sinput type='text' placeholder="0" />
                        </SQ>

                        <SQ>
                            <Sh6>What's your age?</Sh6>
                            <Sinput type='text' placeholder="0" />
                        </SQ>

                        <SQ>
                            <Sh6>What's your gender?</Sh6>
                            
                        </SQ>

                        <SQ>
                            <Sh6>What's your activity level?</Sh6>
                            
                        </SQ>

                        <SQ>
                            <Sh6>Are you vegan or vegetatian?</Sh6>
                            
                        </SQ>

                        <Sh6>Please review your answers and submit when ready.</Sh6>
                        <Button text='Submit' linkto='/userpage'/>
                    </SQ1_3>
                </Squestions>

                </Smid>
                
                <Ssideborder>
                    Welcome to Shredder
                </Ssideborder>

            </Sbackground>
        </>
    )
}