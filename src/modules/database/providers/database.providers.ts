import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from 'src/constants';

export const databaseProviders = [
  {    
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.CONNECTION_STRING)
  },
];