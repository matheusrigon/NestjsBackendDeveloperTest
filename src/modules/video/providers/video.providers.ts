
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION, VIDEO_MODEL } from 'src/constants';
import { VideoSchema } from 'src/modules/video/schemas/video.schemas';

export const videoProvider = [
  {
    provide: VIDEO_MODEL,
    useFactory: (connection: Connection) => connection.model('Video', VideoSchema),
    inject: [DATABASE_CONNECTION],
  },
];
