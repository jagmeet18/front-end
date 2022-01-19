import { useState, useEffect } from "react";
const SignUp = () => {

    const [info, setInfo] = useState(null);
    useEffect(() => {
        fetch('http://localhost:7000/profiles')
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then(data => {
                console.log(data);
                setInfo(data);
            })
        .catch(err => {
            console.log("error!!!" + err)
        });
    },[]);
    
    const [submitted, setSubmitted] = useState(false);

    const handlefirstname = (event) =>{
        setInfo({...info, username: event.target.info})
    }

    const handlelastname = (event) =>{
        setInfo({...info, password: event.target.info})
    }
    const handleemail = (event) =>{
        setInfo({...info, username: event.target.info})
    }

    const handlepassword = (event) =>{
        setInfo({...info, password: event.target.info})
    }
    const handlechaeckpassword = (event) =>{
        event.preventDefault();
        setSubmitted(true);
    }

    return ( 
        <div className="container">
            <div className="form">
            <div className="header">Create an account</div>
                <div className="form_group">
                    <label htmlFor="First Name">Name</label>
                    <input type="text" name="firstname" placeholder="First Name" className="name_textBox"></input>
                    {/* <label htmlFor="Last Name"></label> */}
                    <input type="text" name="lastname" placeholder="Last Name" className="name_textBox"></input>
                </div>
                <div className="form_group">
                    Email
                    <br />
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="text" name="email" placeholder="Email"></input>
                </div>
                <div className="form_group">
                    Password
                    <br />
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="text" name="password" placeholder="Password"></input>
                </div>
                <div className="form_group">
                    Confirm Password
                    <br />
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="text" name="Changepassword" placeholder="Password"></input>
                </div>
                <div className="form_group">
                <div className="pfp">
                    <h3>Add Profile Picture</h3>

                    {/* need to add the functionallity for uploading poic ture will do later after finishing the resty of the work */}

                </div>
                </div>
                <div className="form_group">
                    Add Biography
                    <br />
                    <input type="text" name="bio" placeholder="Bio..."></input>
                </div>
                <div className="footer">
            <button type="button" className="b1">LOGIN</button>
        </div>
            </div>
        </div>
     );
}
 
export default SignUp;