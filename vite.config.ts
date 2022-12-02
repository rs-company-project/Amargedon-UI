import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import plugin from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        include: ['react/jsx-runtime'],
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        plugin({
            'jsxRuntime': 'classic'
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.tsx'),
            name: 'Amargedon Ui',
            formats: ['es', 'cjs'],
            fileName: (format) => `armagedon-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'tailwindcss': 'tailwindcss'
                },
            },
        },
    },
});