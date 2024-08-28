type JSONValue =
	| null
	| boolean
	| number
	| string
	| JSONValue[]
	| { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
	let count = 0;
	args.map(() => count++);
	return count;
}

// This one is the most submitted on leetcode
// Its only done in TS or JS
// Your using the arguments as the IP, so you can't call .length on it
// you have to actually count with a loop
