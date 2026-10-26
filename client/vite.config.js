import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Always use one copy of React (prevents "Invalid hook call")
  resolve: { dedupe: ['react', 'react-dom'] },
  server: { port: 5173 },
});
