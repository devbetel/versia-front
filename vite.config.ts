import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'vendor-react';
          }
          
          if (id.includes('node_modules/aos') || 
              id.includes('node_modules/framer-motion')) {
            return 'vendor-animation';
          }
          
          if (id.includes('node_modules/lucide-react') || 
              id.includes('node_modules/@headlessui/react')) {
            return 'vendor-ui';
          }
          
          if (id.includes('node_modules/recharts') || 
              id.includes('node_modules/@tanstack/react-table')) {
            return 'vendor-charts';
          }
          
          if (id.includes('node_modules/react-helmet-async')) {
            return 'vendor-seo';
          }
          
          if (id.includes('node_modules')) {
            return 'vendor-other';
          }
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    minify: 'esbuild', // Usando esbuild em vez de terser (mais rápido)
    sourcemap: false,
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'aos',
      'react-helmet-async',
      'framer-motion',
      'lucide-react',
    ],
  },
});