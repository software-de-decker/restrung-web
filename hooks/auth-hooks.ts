import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function useAuthState() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(
            auth,
            (u) => {
                setUser(u);
                setLoading(false);
            },
            (e) => {
                setError(e);
                setLoading(false);
            }
        );

        return () => unsub();
    }, []);

    return { user, loading, error };
}
