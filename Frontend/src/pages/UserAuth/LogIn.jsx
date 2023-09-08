import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import styled from 'styled-components'
import { api } from '../../Api';
import { userContext } from '../../App';


const LiHeader = styled.div`
height: 7rem;

background: black;
`;

const LiBase = styled.div`
background-image: url('/loginBackground.avif');
background-repeat: no-repeat;
background-size: 100% 100%;


height: 87vh;

display:flex;
flex-direction: column;
justify-content: center;
// align-items: center;
`;

const LiBox = styled.div`
height: 30rem;
width: 30rem;
margin-left: 5rem;

background: #3f434a70;
box-shadow: 10px 10px 10px 1px #1f2021;
border-radius: 2rem;

display:flex;
flex-direction: column;

align-items: center;

color: white;

`;

const Lih2 = styled.h2`
padding-top:2rem;
padding-bottom: 0.5rem;
text-shadow: #23272e 10px 10px 8px;
`;

const Lih5 = styled.h5`
padding-top:1rem;

font-size: 1rem;
text-shadow: #23272e 5px 3px 5px;
`;

const Lih6 = styled.h6`
text-shadow: #23272e 5px 3px 5px;
margin-bottom: 2rem;

`;

const LiBtn = styled.button`
background: grey;
border: none;
border-radius: 2rem;
color: white;
margin: 1.5rem 0rem;
`;


export default function LogIn() {
    const {setUser} = useContext(userContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    
    const userLogIn = async(e) => {
        e.preventDefault();
        console.log('email', email);
        console.log('password', password);
        let response = await api.post("users/login/", {
            email: email,
            password: password
        });
        let user = response.data.user;
        let token = response.data.token;
        setUser(user);
        localStorage.setItem('token', token);
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        navigate('/')
    }

    return (
        <>
            <LiHeader />

            <LiBase>

                <LiBox>

                    <Lih2>
                        Welcome Back
                    </Lih2>
                    
                    <Lih6>New user?
                        <Link to='/signup'>Sign up</Link>
                    </Lih6>

                    <Lih5>Email</Lih5>
                    <input type="text" placeholder='shredder@ripped.com' onChange={(e) => setEmail(e.target.value)}/>

                    <Lih5>Password</Lih5>
                    <input type="text" placeholder='*******' onChange={(e) => setPassword(e.target.value)}/>

                    <LiBtn
                    onClick={(e) => userLogIn(e)}
                    >Log In</LiBtn>


                </LiBox>



            </LiBase>
        
        </>
    )
}