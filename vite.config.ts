import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //! When creating a project using this template, 
  //! change the value of "base" to the name of your repository
  base: "/job-listing-with-filtering/"
})
