import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base '/' = site lives at the root of your domain (public_html).
// If you host in a subfolder (e.g. yourdomain.com/2026/), change to base: '/2026/'
export default defineConfig({
  plugins: [react()],
  base: '/2026/',
});
