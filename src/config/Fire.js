import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCkFaK6P3fAzIGSQ1SFVroGRsARDWuWV8M",
    authDomain: "test-pace-9350f.firebaseapp.com",
    databaseURL: "https://test-pace-9350f.firebaseio.com",
    projectId: "test-pace-9350f",
    storageBucket: "test-pace-9350f.appspot.com",
    messagingSenderId: "497472312115",
    appId: "1:497472312115:web:84c3dc284964a9cdd2a446",
    measurementId: "G-D3XRR5V1J2"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;