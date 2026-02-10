import { parseArgs } from 'node:util';

// Detect runtime from args
export default parseArgs({
  options: {
    runtime: {
      type: 'string',
      multiple: false,
    },
  },
  strict: true,
}).values.runtime as any;
