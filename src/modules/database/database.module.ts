import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/modules/database/providers/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
