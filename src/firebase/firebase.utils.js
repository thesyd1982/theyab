import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBPJsqTxLWMRndWjBsFphe6MBtw_DMQ6_w",
    authDomain: "theyab-299d8.firebaseapp.com",
    databaseURL: "https://theyab-299d8.firebaseio.com",
    projectId: "theyab-299d8",
    storageBucket: "",
    messagingSenderId: "847076483122",
    appId: "1:847076483122:web:4198e3e18e6aac0d911c2b",
    measurementId: "G-839M67V6VW"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;