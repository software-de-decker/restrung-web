import { IMeasurement } from '@/models/measurement';

export enum StringMaterial {
    NAT_GUT = 'natural gut',
    SYN_GUT = 'synthetic gut',
    POLY = 'polyester',
    MULTI = 'multifilament',
    OTHER = 'other',
}

export interface IString {
    brand: string;
    material: StringMaterial;
    gauges: Array<IMeasurement>;
    colours: Array<string>;
    name: string;
}
