import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'test/vitest.setup.js')],
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
    include: ['__tests__/**/*.[jt]s?(x)'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
});