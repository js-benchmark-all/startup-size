import { MarkdownContent } from './lib/result';
import RESULT from './result.json';

Bun.write('RESULTS.md', new MarkdownContent().render(RESULT));
