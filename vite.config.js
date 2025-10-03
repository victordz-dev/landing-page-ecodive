import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    base: '/landing-page-ecodive/',

    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                login: resolve(__dirname, 'src/login.html'),
            },
        },
    },
});