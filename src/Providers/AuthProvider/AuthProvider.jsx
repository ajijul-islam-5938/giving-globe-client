import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true);
    // Google Login
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Github Login
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }


    // Create User With Email And Password
    const createUser = (email, password, name, photoUrl) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signIn With Email And Padssword
    const signInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // get Current User 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                const user = { email: currentUser.email }
                axios.post(`http://localhost:3000/jwt`, user,{
                    withCredentials : true
                })
                .then(res => console.log("token",res.data))
            }
        });
        return unsubscribe;
    }, [])

    // Send Data to context as Object
    const authInfo = {
        user,
        googleSignIn,
        githubSignIn,
        createUser,
        signInEmailPassword,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;