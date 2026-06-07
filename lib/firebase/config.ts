import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const requiredEnv = (value: string | undefined, name: string): string => {
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
};

const firebaseConfig = {
    apiKey: requiredEnv(process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 'NEXT_PUBLIC_FIREBASE_API_KEY'),
    authDomain: requiredEnv(
        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'
    ),
    projectId: requiredEnv(
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        'NEXT_PUBLIC_FIREBASE_PROJECT_ID'
    ),
    storageBucket: requiredEnv(
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'
    ),
    messagingSenderId: requiredEnv(
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'
    ),
    appId: requiredEnv(process.env.NEXT_PUBLIC_FIREBASE_APP_ID, 'NEXT_PUBLIC_FIREBASE_APP_ID'),
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
