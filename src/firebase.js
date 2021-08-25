import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCW8Tbz6cDLevf_tc3JyfzWNKgg0wqXJTk",
    authDomain: "proyecto-coder-esattler.firebaseapp.com",
    projectId: "proyecto-coder-esattler",
    storageBucket: "proyecto-coder-esattler.appspot.com",
    messagingSenderId: "695511529775",
    appId: "1:695511529775:web:aa867c05a52060ac3589da"
}

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)