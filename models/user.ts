import { Timestamp } from 'firebase/firestore';

export enum UserRole {
    STRINGER = 'stringer',
    PLAYER = 'player',
}

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    roles: Array<UserRole>;
    isAdmin: boolean;
    createdAt: Timestamp;
}
