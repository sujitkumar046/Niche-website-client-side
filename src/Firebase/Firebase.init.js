import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const intialAuthentication = () => 
{
    initializeApp(firebaseConfig);
}



export default intialAuthentication