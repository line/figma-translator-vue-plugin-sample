import vue from '@vitejs/plugin-vue';
import dns from 'dns';
import {resolve} from 'path'
import {defineConfig} from 'vite';
import {viteSingleFile} from "vite-plugin-singlefile";

// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                ui: resolve(__dirname, 'ui.html'),
            }
        }
    },
    plugins: [vue(), viteSingleFile()],
    server: {
        port: 3000,
        open: '/ui.html',
    },
});
