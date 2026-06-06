import { useEffect, useState } from 'react';
import { Entity, IEntity, IEntityList } from '@/models/state-entity';
import { DocumentReference } from 'firebase/firestore';
import { getEntityByReference, getEntityList } from '@/lib/firebase';

export function useEntityByReference<T extends Entity>(docRef: DocumentReference): IEntity<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getEntityByReference<T>(docRef)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [docRef]);

    return { data, loading, error };
}

export function useEntityList<T extends Entity>(path: string): IEntityList<T> {
    const [data, setData] = useState<Array<T>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getEntityList<T>(path)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [path]);

    return { data, loading, error };
}
