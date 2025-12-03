import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = { apiKey: 'AIzaSyCF3Pdi0nRyjbLKnYqxDiqJHkSqkUfWVbk', authDomain: 'pulse-f5547.firebaseapp.com', projectId: 'pulse-f5547', storageBucket: 'pulse-f5547.firebasestorage.app', messagingSenderId: '748217789233', appId: '1:748217789233:ios:f69304b3d8366fdd129e10' };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
