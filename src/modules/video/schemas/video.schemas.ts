
import * as mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true,
        },
    },
    thumbnailUrl: {
        type: String,
        required: true,
        trim: true
    },
    isPrivate: {
        type: Boolean,
        require: true
    },
    timesViewed: {
        type: Number,
        required: true
    }
});
