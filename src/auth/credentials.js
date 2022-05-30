import { dblClick } from "@testing-library/user-event/dist/click";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBtFnotdzj4_s7BVDDlu_NS8bOXkxgShSE",
    authDomain: "auth-2caa3.firebaseapp.com",
    projectId: "auth-2caa3",
    storageBucket: "auth-2caa3.appspot.com",
    messagingSenderId: "560522932248",
    appId: "1:560522932248:web:3edd510c4a567b2fef136d",
    measurementId: "G-5SB8XVYBT8"
};

const firebaseApp = initializeApp(firebaseConfig);

const SaveUser = (user) =>{
    db.collection("users").add({
        user
    })
    .then(function(docRef){
        MJSOK()
    })
    .catch(function(error){
        MJSERROR()
    })
}

const MJSOK =()=>{
    Swal.fire(
        'Bien',
        'Guardado',
        'Exito'
    )
}

const MJSERROR =()=>{
    Swal.fire(
        'oops',
        'no se guardo',
        'error'
    )
}

export default firebaseApp;