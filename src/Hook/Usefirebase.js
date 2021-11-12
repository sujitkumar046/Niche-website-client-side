
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import intialAuthentication from "../Firebase/Firebase.init";

intialAuthentication();

const Usefirebase = () => {

    const [user, Setuser] = useState({});
    const auth = getAuth();


    const RegisterWithEmail = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            Setuser(result.user);
            // ...
          })



    }

    const LoginWithEmail =(email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then (result => {
            Setuser (result.user)
        })
        


    }


    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        })
    //     .catch((error) => {
    //     // An error happened.
    // });

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              Setuser(user)
            } 
            else {
                Setuser({})
            }
          });
          return () => unsubscribe
          
    }, [])




    return {

        user,
        RegisterWithEmail,
        LoginWithEmail, 
        logOut
        



    }

}

export default Usefirebase