import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chattyvid.app',
  appName: 'Chatty Vid Connect',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // Configurações de plugins podem ser adicionadas aqui
  }
};

export default config;