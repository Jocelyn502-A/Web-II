import firebase from 'firebase';
import 'firebase/firestore';

const config = {
 apiKey: "AIzaSyCx9uJalc_x1oyST-8rixL2M3v4BnbTXq8",
    authDomain: "alumnosbdw.firebaseapp.com",
    databaseURL: "https://alumnosbdw.firebaseio.com",
    projectId: "alumnosbdw",
    storageBucket: "alumnosbdw.appspot.com",
    messagingSenderId: "541593904299",
    appId: "1:541593904299:web:862b437307fd6b9657c3ee",
    measurementId: "G-QCNZ60C8TH"
};
firebase.initializeApp(config);


export default firebase;
