import { auth } from '../config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export async function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
    return signOut(auth);
}
