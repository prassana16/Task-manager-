'use client'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyCQqioObH91mhBHJWU_m1dOr8T7YDpx99I",
    authDomain: "task-manager-d5eb8.firebaseapp.com",
    projectId: "task-manager-d5eb8",
    storageBucket: "task-manager-d5eb8.firebasestorage.app",
    messagingSenderId: "1091183283900",
    appId: "1:1091183283900:web:0ab0a143996ae71fcc0ab9",
    measurementId: "G-NZWBCEP5SH"
  };

  const firebaseApp = initializeApp(config);
  const db = getFirestore(firebaseApp);
  
  export { db };
  export const auth = getAuth(firebaseApp);