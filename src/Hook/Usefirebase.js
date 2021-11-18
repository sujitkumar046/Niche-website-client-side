
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import intialAuthentication from "../Firebase/Firebase.init";

intialAuthentication();

const Usefirebase = () => {

    const [user, Setuser] = useState({});
    const [isloading, Setisloading] = useState(true);
    const [authError, SetauthError] = useState('')
    const [admin, Setadmin] = useState(false)
 
    const auth = getAuth();


    const RegisterWithEmail = (email, password, name, history) => {
        Setisloading(true)

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
  
            Setuser(result.user);
            SetauthError('')
            const newuser = {email, displayName: name};
            Setuser(newuser);

            //save user to the database
            
            saveUserData(email, name);


            updateProfile(auth.currentUser, {
                displayName: name
              })
              .then(() => {
                
              }).catch((error) => {
                
                
              });

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


    useEffect(() => {
        fetch(`https://safe-sierra-06219.herokuapp.com/users/${user.email}`)
        .then (res=> res.json())
        .then (data => Setadmin(data.admin))

    }, [user.email])

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

    const saveUserData = (email, displayName) => {
    const user = {email, displayName};

    fetch ('https://safe-sierra-06219.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            
          },
        body: JSON.stringify(user)

    })
 
    .then ()
    




    }




    return {

        user,
        admin,
        isloading,
        RegisterWithEmail,
        LoginWithEmail, 
        logOut,
        authError,
       



    }

}

export default Usefirebase