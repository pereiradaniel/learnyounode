for (i = 2, sum = 0; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
	// console.log(sum);
};

console.log(sum);