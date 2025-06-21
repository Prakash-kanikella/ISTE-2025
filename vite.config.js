import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    // Optional: enables React Router to handle routing instead of Vite trying to serve a file
    historyApiFallback: true,

    // Optional: Proxy API requests to backend server (instead of using full VITE_API_URL)
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});
