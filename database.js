import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBi3yOEvStnagCeNUIFmcU-RUYEPQ8PbQc",
  authDomain: "todolab2.firebaseapp.com",
  projectId: "todolab2",
  storageBucket: "todolab2.appspot.com",
  messagingSenderId: "88389737138",
  appId: "1:88389737138:web:992ee7a493ecfec09f07ab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
