import { Timestamp, DocumentReference } from 'firebase/firestore';
import { IMeasurement } from '@/models/measurement';

export interface IPrice {
    unit: string;
    value: number;
}

export interface IStringJobRacket {
    reference: DocumentReference;
    personalNumber: number;
}

export interface IStringDirections {
    mains: string | IMeasurement | DocumentReference;
    crosses: string | IMeasurement | DocumentReference;
}

export interface IStringJob {
    colour: IStringDirections;
    gauge: IStringDirections;
    tension: IStringDirections;
    personalString: boolean;
    price: IPrice;
    racket: IStringJobRacket;
    stringer: string;
    duration: number;
    string: IStringDirections;
    createdAt: Timestamp;
}
