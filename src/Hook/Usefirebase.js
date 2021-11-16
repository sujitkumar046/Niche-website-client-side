
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import intialAuthentication from "../Firebase/Firebase.init";

intialAuthentication();

const Usefirebase = () => {

    const [user, Setuser] = useState({});
    const [isloading, Setisloading] = useState(true);
    const [authError, SetauthError] = useState('')
 
    const auth = getAuth();


    const RegisterWithEmail = (email, password, history) => {
        Setisloading(true)

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
  
            Setuser(result.user);
            SetauthError('')
            history.replace('/')
          })
          .catch (error => {
             SetauthError(error.message)
          })
          .finally (() => Setisloading(false))
          



    }

    const LoginWithEmail =(email, password, location, history) => {
        Setisloading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then (UserCredential => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            SetauthError('')
        })
        .catch (error => {
            SetauthError(error.message)
         })

        .finally (() => Setisloading(false)) 
        


    }


    const logOut = () => {
        Setisloading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        })
    //    .catch((error) => {
    //     // An error happened.
    // });
    .finally (() => Setisloading(false)) 

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              Setuser(user)
            } 
            else {
                Setuser({})
            }
            Setisloading(false)
          });
          return () => unsubscribe
          
    }, [])




    return {

        user,
        isloading,
        RegisterWithEmail,
        LoginWithEmail, 
        logOut,
        authError
        



    }

}

export default Usefirebase