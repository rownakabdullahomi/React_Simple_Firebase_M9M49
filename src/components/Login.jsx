import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => {
            console.log(error)
            
        });
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(()=>{
            console.log("sign out done");
            setUser(null)
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            
            

            {
                user ? 
                <button onClick={handleGoogleSignOut}>Sign Out</button>
                :
                <button onClick={handleGoogleSignIn}>Login with Google</button>
            }

            {user && <div>
                <h4>{user.displayName}</h4>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
                </div>}
        </div>
    );
};

export default Login;