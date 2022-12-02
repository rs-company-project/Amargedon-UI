import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
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
  ],
  build: {
      lib: {
          entry: path.resolve(__dirname, 'src/lib/index.ts'),
          name: 'Amargedon Ui',
          formats: ['es', 'umd'],
          fileName: (format) => `armagedon-ui.${format}.js`,
      },
      rollupOptions: {
          external: ['react', 'react-dom', 'styled-components'],
          output: {
              globals: {
                  react: 'React',
                  'react-dom': 'ReactDOM',
                  'styled-components': 'styled',
              },
          },
      },
  },
});