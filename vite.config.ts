import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    build: {
      chunkSizeWarningLimit: 8000,
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor-sanity',
                test: (id) => id.includes('sanity') || id.includes('@sanity') || id.includes('@mux/mux-player'),
              },
              {
                name: 'vendor-react',
                test: (id) => id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom'),
              },
              {
                name: 'vendor-framer',
                test: (id) => id.includes('framer-motion'),
              }
            ]
          }
        }
      }
    }
  };
});
