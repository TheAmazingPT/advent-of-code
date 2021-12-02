import part_1 from './part_1.ts';
import part_2 from './part_2.ts';

const input = await Deno.readTextFile('./input');
const lines = input.split('\n').slice(0, -1);

// Display input stats
console.info(`Input has ${input.length} characters and ${lines.length} lines.`);

await part_1(lines);
await part_2(lines);
