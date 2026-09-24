// firebase-config.js - SINGLE CONFIGURATION FILE

const firebaseConfig = {
    apiKey: "AIzaSyD57ErKNYwqGbLcriDYYvPUtVIw8jRncXQ",
    authDomain: "system-order-kitchen.firebaseapp.com",
    projectId: "system-order-kitchen",
    storageBucket: "system-order-kitchen.firebasestorage.app",
    messagingSenderId: "429224554052",
    appId: "1:429224554052:web:85d32727439fe55efcd611"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get Firebase instances - ONLY ONCE
const db = firebase.firestore();
const auth = firebase.auth();

// Enable offline persistence
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(console.error);

// Make available globally
window.db = db;
window.auth = auth;

console.log("✅ Firebase ready - DB and Auth available");
