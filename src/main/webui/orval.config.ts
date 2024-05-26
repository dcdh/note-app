import { defineConfig } from 'orval';

export default defineConfig({
  front: {
    output: {
      mode: 'split',
      target: 'src/api/endpoints.ts',
      schemas: 'src/api/model',
      prettier: true,
      override: {
        mutator: {
          path: 'src/api/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      }
    },
    input: {
      target: './openapi.yaml',
      filters: {
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
