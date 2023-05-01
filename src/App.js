import Player from "./Player"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-zxXvvjnf1eCQ0rVlrnmN-Ko7_R68FxI",
  authDomain: "customplayer-30d18.firebaseapp.com",
  projectId: "customplayer-30d18",
  storageBucket: "customplayer-30d18.appspot.com",
  messagingSenderId: "194787189930",
  appId: "1:194787189930:web:ca5b88acd48631b61f9cd3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <Player/>
  );
}

export default App;
