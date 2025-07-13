import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXT46WjbNPTSN6neCaoru0pycsNR0Ez98",
  authDomain: "retrostore-ac1ea.firebaseapp.com",
  projectId: "retrostore-ac1ea",
  storageBucket: "retrostore-ac1ea.appspot.com",
  messagingSenderId: "448483833863",
  appId: "1:448483833863:web:a3887aa7f9d9e745a1d2a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
