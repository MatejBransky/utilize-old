import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import libPkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, libPkg.source),
      name: 'ReactRouterDOM',
    },
    rollupOptions: {
      external: ['react', 'history', 'react-router'],
      output: {
        globals: {
          react: 'React',
          'react-router': 'ReactRouter',
          history: 'HistoryLibrary',
        },
      },
    },
  },
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: /@utilize\/(.*)/,
        replacement: path.resolve(__dirname, '../$1/src'),
      },
    ],
  },
});
