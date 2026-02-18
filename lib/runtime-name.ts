import { parseArgs } from 'node:util';

// Detect runtime from args
export default parseArgs({
  options: {
    runtime: {
      type: 'string',
      multiple: false,
    },
  },
  strict: false,
}).values.runtime as any;
