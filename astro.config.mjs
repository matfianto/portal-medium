// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Ganti dengan username GitHub dan nama repositori Anda
  site: 'https://matfianto.github.io',
  base: '/portal-medium', // Samakan persis dengan nama repo di GitHub nanti

  vite: {
    plugins: [tailwindcss()],
  },
});