import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCynZrvh_fPVTwMJUdN2OV-hQpVfmAGEXk",
  authDomain: "fogon-7cffb.firebaseapp.com",
  projectId: "fogon-7cffb",
  storageBucket: "fogon-7cffb.appspot.com",
  messagingSenderId: "637132058683",
  appId: "1:637132058683:web:16601c57f5295dc39d6c1e",
  measurementId: "G-Y1H2J61F38"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
