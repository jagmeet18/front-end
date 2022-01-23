import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import db from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore"; 

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

    async function getUsers(){
        try {
            const allUsers = []
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`,doc.data().username)
                allUsers.push(doc.data())
            });
            setUser(allUsers);
        } catch(e) {
            console.log("DIDNT WORK", e);
            setUser('');
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        getUsers();
    }

    useEffect(() => {
        {user && traverseData()}
    }, [user]);

    async function traverseData() {
        var i
        for(i = 0; i<user.length; i++) {
            if(user[i].username === info.username) {
                if(user[i].password === info.password) {
                    console.log('HI', user[i].username);
                    setloggedIN(true);
                    setDenied(false);
                    storeData();
                }
                else{
                    setDenied(true)
                }
            } else {
                setDenied(true)
            }
        }
    }

    async function storeData() {
        const q = query(collection(db, "users"), where("username", "==", info.username));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            localStorage.setItem('user', JSON.stringify(doc.data()));
            var loggingUser = JSON.parse(localStorage.getItem('user'));
            console.log(loggingUser)
        });
    }

    return ( 
        <div className="container" >
            <Link to="/vs" className="links">vs form</Link>
            <Link to="/popup" className="links">pop up</Link>
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
                    <Link to="/signup" className="links">Create an account?</Link>
                    <button onClick={handleSubmit} type="button" className="b1">Login</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;