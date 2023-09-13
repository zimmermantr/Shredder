import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import { api } from '../../Api';
import { userContext } from '../../App';




const SUHeader = styled.div`
height: 7rem;

background: black;
`;

const SUBase = styled.div`
background-image: url('/loginBackground.avif');
background-repeat: no-repeat;
background-size: 100% 100%;


height: 87vh;

display:flex;
flex-direction: column;
justify-content: center;
// align-items: center;
`;

const SUBox = styled.div`
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

const SUh2 = styled.h2`
padding:2rem;
text-shadow: #23272e 10px 10px 8px;
`;

const SUh5 = styled.h5`
padding-top:1rem;

font-size: 1rem;
text-shadow: #23272e 5px 3px 5px;
`;

const SUh6 = styled.h6`
text-shadow: #23272e 5px 3px 5px;


`;

const SUBtn = styled.button`
background: grey;
border:none;
border-radius: 2rem;
color: white;
margin: 1.5rem 0rem;
`;


export default function SignUp() {
    const {setUser} = useContext(userContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=> {

    }, [email, password])

    const userRegistration = async(e) => {
        e.preventDefault();
        console.log();
        let response = await api.post("users/register/",{
            email: email,
            password: password
        });
        let user = response.data.user;
        let token = response.data.token;
        setUser(user)
        localStorage.setItem('token', token);
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        navigate('/user/survey/')
    }


    return (
        <>
            <SUHeader />

            <SUBase>

                <SUBox>

                    <SUh2>
                        Welcome to Shredder
                    </SUh2>

                    <SUh5>Email</SUh5>
                    <input type="text" placeholder='shredder@ripped.com' onChange={(e) => setEmail(e.target.value)}/>

                    <SUh5>Password</SUh5>
                    <input type="text" placeholder='*******' onChange={(e) => setPassword(e.target.value)}/>

                    <SUBtn
                    onClick={(e) => userRegistration(e)}
                    >Sign Up</SUBtn>

                    <SUh6>Returning user?
                        <Link to='/login'>Log in</Link>
                    </SUh6>

                </SUBox>



            </SUBase>
        
        </>
    )
}