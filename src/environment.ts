declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONNECTION_STRING: string;
      NODE_ENV: 'dev' | 'prod';
      PORT?: string;
    }
  }
}
export {}