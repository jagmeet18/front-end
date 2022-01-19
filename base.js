import {Link, link} from 'react-router-dom';
const Base = () => {
    return ( 
        
       <div className="navbar">
           <br />
            <Link to="/signup" style= {{  // we can even use <a href = "" instead of link prevents the request to server and get the page from link tab 
            color: "white",     // faster than useing a href as it does not ask requesrts
            backgroundColor: "deeppink",
            borderRadius: "8px",
            height:10,
            padding: 5,
            paddingBottom:10,
            paddingTop:9,
            margin:10,
        }} className='main'>create account</Link>
        <Link to ="/login" style = {{
            color: "white",
            backgroundColor: "deeppink",
            borderRadius: "8px",
            height:10,
            padding:10,
            paddingBottom:10,
            margin:10
        }} className='main'>login</Link>
        <br />
       </div>
     );
}
 
export default Base;