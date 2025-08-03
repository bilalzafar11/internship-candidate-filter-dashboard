// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDqSSTnamE6ZW79O4X-Fn2CPwi4R3BCE4c",
  authDomain: "transaction-fd4ff.firebaseapp.com",
  projectId: "transaction-fd4ff",
  storageBucket: "transaction-fd4ff.firebasestorage.app",
  messagingSenderId: "364088936708",
  appId: "1:364088936708:web:fbe939ad8f92f06448a851",
  measurementId: "G-H5XH5VY709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
