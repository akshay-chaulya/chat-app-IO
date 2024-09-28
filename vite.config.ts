import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['socket.io-client'],
  },
  // proxy
  // server: {
  //   proxy: {
  //     "/api/v1": {
  //       target: `${apiUrl}`
  //     }
  //   }
  // }
})
