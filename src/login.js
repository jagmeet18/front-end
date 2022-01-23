import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 

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

    async function getUser(){
        try {
            const dd = []
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`,doc.data().username)
                dd.push(doc.data())
            });
            setUser(dd);
        } catch(e) {
            console.log("DIDNT WORK", e);
            setUser('');
        }
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
                    break;
                }
                else{
                    setDenied(true)
                }
            } else {
                setDenied(true)
            }
        }
    }

    return ( 
        <div className="container" >
            <div className="form">
                <div className="header">Login</div>
               {loggedIN ? history.push(`/profile/${info.username}`) : null} {/* instead of the div we gonna link profile page so add <profile></profile> */}
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
            <p className="text-sm">
                New Here?{` `}
                <Link to= "/signup">Register</Link>
            </p>
        </div>
     );
}
 
export default Login;