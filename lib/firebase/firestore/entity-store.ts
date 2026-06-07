import { Entity } from '@/models/state-entity';
import { collection, DocumentReference, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config';

export async function getEntityByReference<T extends Entity>(
    docRef: DocumentReference
): Promise<T | null> {
    const snap = await getDoc(docRef);
    return snap.exists() ? (snap.data() as T) : null;
}

export async function getEntityList<T extends Entity>(path: string): Promise<Array<T>> {
    const snap = await getDocs(collection(db, path));
    return snap.docs.map((doc) => doc.data() as T);
}
