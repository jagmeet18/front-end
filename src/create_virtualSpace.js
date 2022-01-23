import { useState} from "react";

const VS = () => {
    const [RName, setRName] = useState('');
    const [Cname, setCname] = useState('');

    const handleSubmit = (e) =>{
        console.log('this works')
    }

    return ( 
        <div className="container">
            <div className="form">
                <div className="form_group">
                <div className="header">
                    <h2>Create Room</h2>
                </div>
                    <label htmlFor="Room Name">Room Name</label>
                    <input type="text" name="roomname" placeholder="Room Name" value={RName} onChange={(e) => setRName(e.target.value)} className="name_textBox"></input>
                </div>
                <div className="form_group">
                    Community
                    <br />
                    <input type="text" name="community" placeholder="Community Name" value={Cname} onChange={(e) => setCname(e.target.value)}></input>
                </div>
                 <div className="footer">
                    <button onClick={handleSubmit} type="button" className="b1">Create Room</button>
                </div>
            </div>
        </div>
     );
}
 
export default VS;