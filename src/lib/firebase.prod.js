import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBOtgBMGgM5ysh3rCduMoaxZYN8wRy2eRc",
  authDomain: "netflix-web-e1197.firebaseapp.com",
  projectId: "netflix-web-e1197",
  storageBucket: "netflix-web-e1197.appspot.com",
  messagingSenderId: "906688628633",
  appId: "1:906688628633:web:839b1c0a9a2cd725a07508"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
