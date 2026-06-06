import type { IUser } from './user';
import type { IRacket } from './racket';
import type { IStringJob } from './string-job';
import type { IString } from './tennis-string';

export type Entity = IUser | IString | IStringJob | IRacket;

export interface IStateEntity {
    loading: boolean;
    error: Error | null;
}

export interface IEntity<T extends Entity> extends IStateEntity {
    data: T | null;
}

export interface IEntityList<T extends Entity> extends IStateEntity {
    data: Array<T>;
}
