import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from React

export default defineConfig({
  plugins: [
    React(),
    tailwindcss(),
  ],
})
