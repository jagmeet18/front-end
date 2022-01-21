import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState();

    const [info, setInfo] = useState({
        username: "",
        password: ""
    });

    const [loggedIN, setloggedIN] = useState();
    const [denied, setDenied] = useState();
    const history = useHistory();
    const handleInfo = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInfo({...info, [name] : value})
    }

    function getUser(){
        axios
        .get('http://localhost:3000/profiles')
        .then((res) => {
            setUser(res.data);
        }
        );
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        getUser();
        
    }

    useEffect(() => {
        {user && traverseData()}
    }, [user]);

    function traverseData() {
        var i
        for(i = 0; i<user.length; i++) {
            if(user[i].username === info.username) {
                if(user[i].password === info.password) {
                    console.log('HI', user[i].username);
                    setloggedIN(true);
                    setDenied(false);
                    // console.log(loggedIN)
                    // console.log(denied)
                    break;
                }
                else{
                    setDenied(true)
                }
            } else {
                setDenied(true)
            }
        }

        // if(loggedIN === false) {
        //     setDenied(true);
        //     console.log(denied);
        // }
    }
// to do
// sign up - make sure password is fllowing a cirtain pattern
// if confirm is not equal show page
    return ( 
        <div className="container" >
            <div className="form">
            <div className="header">Login</div>
               {loggedIN ? history.push(`/profile/${info.username}`) : null} {/* instead of the div we gonna link profile page so add <profile></profile> */}
               {/* {loggedIN ? <div className="errorHandle">loggged in</div> : null}*/}
               {denied ? <div className="errorHandle">denied</div> : null} 
               
                <div className="form_group">
                    <label htmlFor="Username">Username</label>
                    <input onChange={handleInfo} value={info.username} type="text" name="username" placeholder="Username"></input>                    
                </div>
                <div className="form_group">
                    <label htmlFor="Password">Password</label>
                    <input onChange={handleInfo} value={info.password} type="password" name="password" placeholder="Password"></input>
                </div>
                <div className="footer">
            <button onClick={handleSubmit} type="button" className="b1">Login</button>
            </div>
            </div>
        </div>
     );
}
 
export default Login;