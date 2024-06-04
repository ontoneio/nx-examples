/// <reference types='vitest' />
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite'; 

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vite-bug-repro',
  
  server: {
    port: 4200,
    host: 'localhost',
  },
  
  preview: {
    port: 4300,
    host: 'localhost',
  },
  
  plugins: [
    nxViteTsPaths(),
    // Uncommenting the below import breaks other projects in the nx graph including commands like 'nx report'

    UnoCSS({
      mode: 'shadow-dom',
      presets: [],
    }),
  ],

  build: {
    outDir: '../../dist/apps/vite-bug-repro',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
