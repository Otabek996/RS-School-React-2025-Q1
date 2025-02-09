import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/RS-School-React-2025-Q1/',
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['**/*.tsx'],
      exclude: [
        '**/node_modules/**',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        'src/__tests__/setup.ts',
      ],
    },
  },
});
