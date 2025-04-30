// Import the functions you need from Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';  // Import Firestore functions

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDMCkN2KB6ll_PQMzdoGhj3J7-Bm-rvlNY",
  authDomain: "chat-app-afd23.firebaseapp.com",
  projectId: "chat-app-afd23",
  storageBucket: "chat-app-afd23.firebasestorage.app",
  messagingSenderId: "732740310807",
  appId: "1:732740310807:web:e626a0143a0036cb510952",
  measurementId: "G-PY9BKJQ3X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore-related functions
export { db, collection, addDoc, onSnapshot };
