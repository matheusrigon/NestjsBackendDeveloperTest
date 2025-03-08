import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VideoModule } from 'src/modules/video/video.module';
import { HealthModule } from 'src/modules/health/health.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.prod',
      isGlobal: true
    }),
    VideoModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
