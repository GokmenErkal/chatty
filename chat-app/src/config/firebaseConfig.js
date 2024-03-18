import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCZBbCs1_utd3CSc1ilbYDXYbxgrerl8wg",
    authDomain: "chat-app-1b6d9.firebaseapp.com",
    projectId: "chat-app-1b6d9",
    storageBucket: "chat-app-1b6d9.appspot.com",
    messagingSenderId: "585408135993",
    appId: "1:585408135993:web:8899fb6a5207fe66299ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app