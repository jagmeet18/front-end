import { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
// import FirebaseContext from './firebasec';
import db from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import {v4 as uuidv4} from 'uuid';


const SignUp = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [confirm, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [pfp, setPfp] = useState('');
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

    const [PasswordDiff, setPasswordDiff] = useState();
    const [signedUP, setSignedUp] = useState();
    const history = useHistory();
    // const { firebase } = useContext(FirebaseContext);

    async function postUser(fName,lName,email,username,password,pfp,bio){
        // firebase user collection (create a document)
        try{
            const docRef = await addDoc(collection(db, "users"), {
                id: uuidv4(),
                fName: fName,
                lName: lName,
                email: email,
                username: username,
                password: password,
                pfp: pfp,
                bio: bio
            })
            console.log("Document written with ID: ", docRef.id);
            setUser(
                {"id": uuidv4(),
                "fName": fName,
                "lName": lName,
                "email": email,
                "username": username,
                "password": password,
                "pfp": pfp,
                "bio": bio}
            )
            setSignedUp(true);
            localStorage.setItem('user', JSON.stringify(user));
            var loggingUser = JSON.parse(localStorage.getItem('user'));
            console.log(loggingUser)
            history.push(`/profile/${username}`)  //can't push from here
        } catch(e) {
            console.log("DIDNT WORK", e);
            setUser('');
            setSignedUp(false);
        }
    }

    useEffect(() => {
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
        } else {
            setPasswordDiff(true);
        }
    }

    return ( 
        <div className="container">
            <div className="form">
                <div className="header">Create an account</div>
                {PasswordDiff && <div className="errorHandle">Password is not the same try again</div> }
                <div className="form_group">
                    <div className="header"><h1>Create an account</h1></div>
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
                    <div className="msg">Already have an account?</div>
                    <br />
                    <Link to="/login" className="links2">Log in</Link>
                    <button onClick={handleSubmit} type="button" className="b1">Sign up</button>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;