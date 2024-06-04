import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      presets: [presetWind()],
    }),
  ],
});