// firebase-config.js
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

const db = firebase.firestore();
const auth = firebase.auth();

// Enable persistence (keeps user logged in)
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

console.log("✅ Firebase initialized successfully");
console.log("✅ Firestore and Auth services ready");
