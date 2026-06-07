import { Timestamp } from 'firebase/firestore';
import { IMeasurement } from '@/models/measurement';

export enum GripSize {
    L1 = 'l1',
    L2 = 'l2',
    L3 = 'l3',
    L4 = 'l4',
}

export interface IRacket {
    brand: string;
    line: string;
    model: string;
    gripSize: GripSize;
    headSize: IMeasurement;
    length: IMeasurement;
    weight: IMeasurement;
    year: number;
    stringingNotes: string;
    createdAt: Timestamp;
}
