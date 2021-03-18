import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import libPkg from '../package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@utilize/react-router-dom': path.resolve(__dirname, '..', libPkg.source),
    },
  },
});
