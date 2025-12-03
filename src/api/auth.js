import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export async function signUp(email, password){return await createUserWithEmailAndPassword(auth,email,password);}
export async function login(email,password){return await signInWithEmailAndPassword(auth,email,password);}
