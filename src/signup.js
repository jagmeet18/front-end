import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from './firebase';
import axios from "axios";
import {v4 as uuidv4} from 'uuid';

const SignUp = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [confirm, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    const[user, setUser] = useState({
        id: "",
        fName: "",
        lName: "",
        email: "",
        username: "",
        password: "",
        bio: ""
    })
    // const [loggedIN, setloggedIN] = useState();
    const [PasswordDiff, setPasswordDiff] = useState();
    const history = useHistory();
    const[pfp, setPfp] = useState('');

    function postUser(fName,lName,email,username,password,pfp,bio){
        axios
        .post('http://localhost:3000/profiles', {
            id: uuidv4(),
            fName: fName,
            lName: lName,
            email: email,
            username: username,
            password: password,
            pfp: pfp,
            bio: bio
        })
        .then((res) => {
          setUser(res.data);
        });
    }

    useEffect(() => {
        // setloggedIN(true);
        // history.push(`/profile/${user.username}`)
        console.log(user);
    },[user]);

    

    const UploadPic = (e) => {
        console.log('button to upload clicked')
        const reader = new FileReader(); 
        console.log(reader)
        reader.onload = () => {
            if(reader.readyState === 2){
                setPfp(reader.result);
                //console.log(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(confirm === password) {
            postUser(fName, lName, email, username, password,pfp, bio);
            setPasswordDiff(false);
            // setloggedIN(true)
        } else {
            setPasswordDiff(true);
            // setloggedIN(false)
        }
    }

    return ( 
        <div className="container">
            <div className="form">
            <div className="header">Create an account</div>
            {PasswordDiff && <div className="errorHandle">Password is not the same try again</div> }
            {/* {loggedIN ? <div className="errorHandle">Password is not the same try again</div> : null} */}
                <div className="form_group">
                    <label htmlFor="First Name">Name</label>
                    <input type="text" name="firstname" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)} className="name_textBox"></input>
                    
                    <input type="text" name="lastname" placeholder="Last Name" value={lName} onChange={(e) => setLName(e.target.value)} className="name_textBox"></input>
                </div>
                <div className="form_group">
                    Email
                    <br />
                    <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form_group">
                    Username
                    <br />
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="form_group">
                    Password
                    <br />
                    <input type="password" name="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form_group">
                    Confirm Password
                    <br />
                    <input type="password" name="Changepassword" placeholder="Password"  onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </div>
                <div className="form_group">
                <div className="pfp">
                    <p>
                        Add profile picture
                    </p>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={UploadPic}></input>
                    {/* need to add the functionallity for uploading poic ture will do later after finishing the resty of the work */}

                </div>
                </div>
                <div className="form_group">
                    Add Biography
                    <br />
                    <input type="text" name="bio" placeholder="Bio..." value={bio} onChange={(e) => setBio(e.target.value)}></input>
                </div>
                <div className="footer">
            <button type="button" onClick={handleSubmit} className="b1">LOGIN</button>
        </div>
            </div>
        </div>
     );
}
 
export default SignUp;