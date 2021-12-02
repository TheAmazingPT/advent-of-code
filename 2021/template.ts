const input = await Deno.readTextFile('./input');
const lines = input.split('\n').slice(0, -1);

// Display input stats
console.info(`Input has ${input.length} characters and ${lines.length} lines.`);

// First look into the input
console.log(lines.slice(0, 100));
