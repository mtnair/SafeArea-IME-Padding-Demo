import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.martin_fr.safearea_ime_padding_demo',
  appName: 'SafeArea IME Padding Demo',
  webDir: 'www',
  android: {},
  plugins: {
    SystemBars: {
      insetsHandling: 'disable',
    },
  },
};

export default config;
