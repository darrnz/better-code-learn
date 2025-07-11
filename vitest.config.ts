import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'src/**/*.test.ts',
      'src/**/*.test.js',
      'src/**/*.test.mts',
      'src/**/*.test.cjs',
      'src/**/*.test.tsx',
      'src/**/*.test.jsx',
      'src/**/*.exercises.test.ts',
    ],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
