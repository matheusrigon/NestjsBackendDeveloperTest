import { Module } from '@nestjs/common';
import { VideoController } from './controllers/video.controllers';
import { videoProvider } from './providers/video.providers';
import { DatabaseModule } from '../database/database.module';
import { VideoService } from './services/video.services';

@Module({
  imports: [DatabaseModule],
  controllers: [VideoController],
  providers: [VideoService,...videoProvider]
})
export class VideoModule {}
