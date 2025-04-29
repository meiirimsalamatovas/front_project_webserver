
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtsBOdCZ7W4fV8kDcK0jYqT-j9UzJkHmU",
    authDomain: "web-s-92dd9.firebaseapp.com",
    projectId: "web-s-92dd9",
    storageBucket: "web-s-92dd9.firebasestorage.app",
    messagingSenderId: "392407047904",
    appId: "1:392407047904:web:40bbc220e28f7b8ea97a85",
    measurementId: "G-D753SF1WQN"
  };

  const app = initializeApp(firebaseConfig);


  const auth = getAuth(app);
  
  export { auth }; 