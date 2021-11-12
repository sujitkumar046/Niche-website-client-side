
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
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




    return {

        user,
        RegisterWithEmail,
        



    }

}

export default Usefirebase