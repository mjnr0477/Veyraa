import { db } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
export async function createUserProfile(uid, username, displayName, avatarUrl=''){await setDoc(doc(db,'users',uid),{username,displayName,avatarUrl,followersCount:0,followingCount:0,createdAt:new Date()});}
export async function getUserProfile(uid){const docRef=doc(db,'users',uid);const docSnap=await getDoc(docRef);if(docSnap.exists()) return docSnap.data();return null;}
