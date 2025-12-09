import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',
        cssCodeSplit: true,
        cssMinify: true,
        minify: 'esbuild',
        target: 'esnext',
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-vue': ['vue', 'vue-router'],
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
    server: {
        headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    },
});
