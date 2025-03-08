import { Document } from 'mongoose';

export interface Video extends Document {
    readonly name: string;
    readonly url: string;
    readonly thumbnailUrl: string;
    readonly isPrivate: boolean;
    readonly timesViewed: 50
}