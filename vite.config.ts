/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // transformMode: {
    //   web: [/\.[jt]sx?$/],
    // },
    transformMode: { web: [/.[tj]sx$/] },
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});

