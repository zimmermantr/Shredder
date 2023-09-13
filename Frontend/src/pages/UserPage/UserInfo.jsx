import { useEffect, useContext } from "react";
import { userContext } from "../../App";
import { api } from "../../Api";
import Nav from "../Nav/Nav";

export default function UserInfo () {
    const {user, setUser} = useContext(userContext)

    useEffect(()=> {

        const validUser = async() => {
          let token = localStorage.getItem('token');
          if (token){
            api.defaults.headers.common["Authorization"] = `Token ${token}`;
            let response = await api.get('users/');
            setUser(response.data);
          }
        };
        validUser();
      }, []);

    useEffect(()=>{
        if (user && user.survey_responses[0]){
            console.log(user.survey_responses[0].weight)
        }

    },[user])

    return (
        <>
            <Nav />
            {user && user.survey_responses[0] &&
            <>
            <h6>{`weight: ${user.survey_responses[0].weight}`}</h6>
            <h6>{`height: ${user.survey_responses[0].height}`}</h6>
            <h6>{`age: ${user.survey_responses[0].age}`}</h6>
            <h6>{`equipment available: ${user.survey_responses[0].equipment}`}</h6>
            </>
            }
        </>
    )
}