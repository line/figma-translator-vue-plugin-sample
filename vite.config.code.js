import {resolve} from 'path'
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/code.ts'),
            fileName: 'code',
            formats: ['cjs'],
        },
        emptyOutDir: false,
    }
});
