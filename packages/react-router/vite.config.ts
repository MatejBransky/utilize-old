import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import libPkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, libPkg.source),
      name: 'ReactRouter',
    },
    rollupOptions: {
      external: ['react', 'history'],
      output: {
        globals: {
          react: 'React',
          history: 'HistoryLibrary',
        },
      },
    },
  },
  plugins: [reactRefresh()],
});
