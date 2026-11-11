import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.splitpro.split',
  appName: 'SplitPro',
  webDir: 'www',
  server: {
    url: 'http://127.0.0.1:3000',
    androidScheme: 'https',
    cleartext: true
  }
};

export default config;
