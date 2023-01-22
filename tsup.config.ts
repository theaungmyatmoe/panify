import {defineConfig} from 'tsup';

export default defineConfig({
    entry: {
        'panify': './src/cli/index.ts',
    },
    format: ['esm'],
});