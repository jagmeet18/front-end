const Profile = () => {
    var meow = JSON.parse(localStorage.getItem('user'));
    return ( 
        <div className="details">
            <h1>Profile Page</h1>
            <div id="user" class="container">
                <div class="id">{meow.id}</div>
                <div class="username">{meow.username}</div>
                <div class="email">{meow.email}</div>
            </div>
        </div>
     );
}
 
export default Profile;