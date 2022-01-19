import { useState, useEffect } from "react";

const Login = () => {
const [dataBase, setdataBase] = useState(null);
const [temp_pass, setTemp_pass] = useState(null);

const users = [];

const [info, setInfo] = useState({
    username: "",
    password: ""
});

const [submitted, setSubmitted] = useState(false);

const handleInfo = (event) =>{
    const name = event.target.name;
    console.log(name)
    const value = event.target.value;
    console.log(value)
    // setInfo({...info, [name] : event.target.info})
    setInfo({...info, [name] : value})
}

// const handlePasswordInfo = (event) =>{
//     setInfo({...info, password: event.target.info})
// }
    useEffect(() => {
        fetch('http://localhost:7000/profiles')
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then(data => {
                console.log(data);
                setdataBase(data);
            })
        .catch(err => {
            console.log("error!!!" + err)
        });
    },[]);

// const acc = (data) =>{
//     const account = data.filter(data => data.username === info.username);
//     return account;
// }
    const handleSubmit = (event) =>{
        event.preventDefault();
        // var log_acc = acc(dataBase);
        // if(info.username === log_acc.username){
        //     console.log("user match");
        // }
        console.log('final username')
        console.log(info.username)
        console.log('final password')
        console.log(info.password)
        console.log()
        var i;
        for(i = 0; i < 2 ; i++){
            if(dataBase[i].username === info.username ){
                if(dataBase[i].password === info.password){
                    console.log('access granted');
                }
            }
        }
        
    }

    return ( 
        <div className="container" >
            <div className="form" onSubmit={handleSubmit}>
            <div className="header">Login</div>
               {submitted ? <div className="sub">tag to home page in actual application</div> : null}
                <div className="form_group">
                    <label htmlFor="Username">Username</label>
                    <input onChange={handleInfo} value={info.username} type="text" name="username" placeholder="Username"></input>                    
                </div>
                <div className="form_group">
                    <label htmlFor="Password">Password</label>
                    <input onChange={handleInfo} value={info.password} type="text" name="password" placeholder="Password"></input>
                </div>
                <div className="footer">
            <button onClick={handleSubmit} type="button" className="b1">LOGIN</button>
            </div>
            </div>
        </div>
     );
}
 
export default Login;